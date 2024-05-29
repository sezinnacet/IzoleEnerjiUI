import { Box, Button, Stack } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import { calculateSavings } from "../../calculations/heatTransfer";
import { useStoreProducts, useStoreProfile } from "../../store/store";
import ResultComponent from "../ResultComponent/ResultComponent";
import DotStep from "./DotStep";
import EnergyForm from "./EnergyForm";
const steps = [
  "Şu anki yakıt faturası",
  "Şu anki ev donanımı",
  "Yeni ev donanımı",
];

export default function EnergyFormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});
  const products = useStoreProducts((state) => state.products);
  const profile = useStoreProfile((state) => state.profile);

  const [results, setResults] = React.useState({
    energySavings: "",
    newBill: "",
    savingPercentage: 0,
    amortiYil: 0,
    toplamMaliyet: 0,
    onerilen: "",
  });
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({});
  };

  const handleFinish = (values) => {
    console.log(formData);
    let oldValues = { ...formData };

    Object.entries(values).forEach(([key, value]) => {
      if (oldValues[key]) {
        oldValues = {
          ...oldValues,
          [key]: {
            ...oldValues[key],
            ...value,
          },
        };
      } else {
        oldValues[key] = value;
      }
    });
    Object.entries(oldValues).forEach(([key, value]) => {
      if (
        (key === "insideDegree" ||
          key === "outsideDegree" ||
          key === "lastBill") &&
        typeof value === "object"
      ) {
        oldValues[key] = +Object.entries(value)
          .map(([key, value]) => value)
          .join("");
      }
    });
    setFormData(oldValues);
    console.log("Step result:", oldValues);

    if (activeStep === steps.length - 1) {
      let data = {
        categories: [],
        outsideDegree: "",
        insideDegree: "",
        lastBill: "",
      };
      Object.entries(oldValues).forEach(([key, value]) => {
        if (
          key === "insideDegree" ||
          key === "outsideDegree" ||
          key === "lastBill"
        ) {
          data[key] = value;
        } else {
          data.categories.push({
            name: key,
            ...value,
          });
        }
      });
      console.log(data);
      calculateResults(data);
      handleNext();
    } else {
      handleNext();
    }
  };
  const calculateResults = (data) => {
    const { categories, outsideDegree, insideDegree, lastBill } = data;
    const { savingPercentage, newBill, amortiYil, toplamMaliyet } =
      calculateSavings({
        categories: [...categories],
        categoryOptions: products,
        outsideDegree: +outsideDegree,
        insideDegree: +insideDegree,
        lastBill: +lastBill,
      });

    if (profile?.userDetails.isPremium) {
      let { temp, result } = akilliOneri(
        categories,
        products,
        outsideDegree,
        insideDegree,
        lastBill,
        findMinAmortiYil
      );
      console.log(temp, result);
      setResults({
        newBill: newBill,
        savingPercentage: Math.abs(savingPercentage),
        amortiYil: amortiYil,
        toplamMaliyet: toplamMaliyet,
        onerilen: { malzemeler: temp, sonuc: result },
      });
    } else {
      setResults({
        newBill: newBill,
        savingPercentage: Math.abs(savingPercentage),
        amortiYil: amortiYil,
        toplamMaliyet: toplamMaliyet,
      });
    }
  };

  function findMinAmortiYil(data) {
    const categoryMap = {};

    data.forEach((item) => {
      const categoryName = item.categoryName;
      if (
        !categoryMap[categoryName] ||
        item.amortiYil < categoryMap[categoryName].amortiYil
      ) {
        categoryMap[categoryName] = item;
      }
    });

    return Object.values(categoryMap);
  }
  return (
    <Stack p={0} justifyContent={"center"} pt={2}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "grey.400", // Just text label (COMPLETED)
                },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "common.white", // Just text label (ACTIVE)
                },
            }}
          >
            <StepLabel StepIconComponent={DotStep}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Box sx={{ pt: 4, pb: 2, pl: { xs: 0, sm: 2 } }}>
          <ResultComponent
            newBill={results.newBill}
            oldBill={formData.lastBill}
            savingsPercentage={results.savingPercentage}
            amortiYil={results.amortiYil}
            toplamMaliyet={results.toplamMaliyet}
            onerilen={results.onerilen}
          />
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              ":hover": { backgroundColor: "white" },
              pr: 3,
              pl: 3,
              mt: 2,
            }}
            variant="contained"
            onClick={handleReset}
          >
            Sıfırla
          </Button>
          <Button
            variant="contained"
            onClick={handleBack}
            sx={{
              color: "white",
              backgroundColor: "black",
              ":hover": { backgroundColor: "black" },
              pr: 3,
              pl: 3,
              mt: 2,
              ml: 2,
            }}
          >
            Geri
          </Button>
        </Box>
      ) : (
        <div>
          <EnergyForm
            activeStep={activeStep}
            handleFinish={handleFinish}
            initialValues={formData}
            handleBack={handleBack}
          />
        </div>
      )}
    </Stack>
  );
}
function akilliOneri(
  categories,
  products,
  outsideDegree,
  insideDegree,
  lastBill,
  findMinAmortiYil
) {
  let optimumDegerler = [];
  categories.forEach((category) => {
    let option = products.find((opt) => opt.categoryName === category.name);
    let oldValue = option?.products[category[`current${category.name}`]];
    let selectable = option.products.filter(
      (x) => x !== oldValue && x.rValue > oldValue.rValue
    );
    selectable.forEach((selected) => {
      let index = option.products.findIndex((x) => x == selected);
      let denemeDeger = [...categories];
      let degistirilecekIndex = denemeDeger.findIndex(
        (x) => x.name == category.name
      );
      let deger = {
        ...category,
        [`new${category.name}`]: index,
      };

      denemeDeger[degistirilecekIndex] = deger;
      const { savingPercentage, newBill, amortiYil, toplamMaliyet } =
        calculateSavings({
          categories: denemeDeger,
          categoryOptions: products,
          outsideDegree: +outsideDegree,
          insideDegree: +insideDegree,
          lastBill: +lastBill,
        });

      optimumDegerler.push({
        product: option.products[index],
        categoryName: category.name,
        amortiYil: amortiYil,
        toplamMaliyet: toplamMaliyet,
      });
    });
  });
  let temp = findMinAmortiYil(optimumDegerler);
  let denemeDeger = [...categories];

  denemeDeger.forEach((deger) => {
    let s = temp?.find((x) => x.categoryName == deger.name);
    if (s) {
      let t = products.find((x) => x.categoryName == s.categoryName);
      let neoIndex = t.products.findIndex((x) => x == s.product);
      deger[`new${deger.name}`] = neoIndex;
    }
  });
  let result = calculateSavings({
    categories: denemeDeger,
    categoryOptions: products,
    outsideDegree: +outsideDegree,
    insideDegree: +insideDegree,
    lastBill: +lastBill,
  });
  return { temp, result };
}
