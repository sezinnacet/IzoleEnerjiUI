import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { GetAllProductsList } from "../../api/productApi";
import EnergyFormStepper from "../../components/Stepper/EnergyFormStepper";
import { useStoreProducts } from "../../store/store";
import IsolationText from "./IsolationText";
import "./styleCalc.css";
export default function IsolationCalculation() {
  const banner = require("../../images/banner4.png");
  // const products = useStoreProducts((state) => state.products);
  const setProducts = useStoreProducts((state) => state.setProducts);

  useEffect(() => {
    GetAllProductsList().then((response) => {
      if (response.data.resultObject) {
        setProducts({ products: response.data.resultObject });
        console.log(response.data.resultObject);
      } else {
        setProducts({ products: [] });
      }
    });
  }, []);

  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Grid container xs={12} md={12} lg={6} direction={"column"}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: "45px 40px 0px 40px",
                textAlign: "start",
                width: { xs: "390px", sm: "100%" },
              }}
            >
              <IsolationText />
            </Box>
          </Grid>
          <Grid item sx={{ width: { xs: "390px", sm: "100%" } }}>
            <EnergyFormStepper />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <img
            style={{
              marginTop: "5%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            src={banner}
            alt="banner"
          />
        </Grid>
      </Grid>
    </>
  );
}
