import { calculatePercentageChange, toplaSayilari } from "../helper/helper";

class Insulation {
  constructor(area, currentRValue, newRValue, price) {
    this.area = +area;
    this.currentRValue = currentRValue;
    this.newRValue = newRValue;
    this.price = price;
  }
}

export function calculateSavings({
  categories = [],
  categoryOptions = [],
  outsideDegree,
  insideDegree,
  lastBill,
}) {
  const insulations = categories?.map((category) => {
    let option = categoryOptions.find(
      (opt) => opt.categoryName === category.name
    );
    let newValue = option?.products[category[`new${category.name}`]];
    let oldValue = option?.products[category[`current${category.name}`]];
    let newRValue = newValue?.rValue;
    let oldRValue = oldValue?.rValue;
    let newPrice = newValue?.price;
    let price = newValue !== oldValue ? newPrice : 0;

    price = +category[`current${category.name}Area`] * +price;
    return new Insulation(
      category[`current${category.name}Area`],
      oldRValue,
      newRValue,
      price
    );
  });

  let isiHizlariEski = insulations.map((yapi) => {
    return (
      (+yapi.area * Math.abs(insideDegree - outsideDegree)) / yapi.currentRValue
    );
  });
  let isiHizlariYeni = insulations.map((yapi) => {
    return (
      (+yapi.area * Math.abs(insideDegree - outsideDegree)) / yapi.newRValue
    );
  });
  let toplamEskiIletimHizi = isiHizlariEski.reduce(function (
    total,
    currentValue
  ) {
    return +total + +currentValue;
  },
  0);

  let toplamYeniIletimHizi = isiHizlariYeni.reduce(function (
    total,
    currentValue
  ) {
    return +total + +currentValue;
  },
  0);

  let yuzdelikDegisim = calculatePercentageChange({
    firstValue: toplamEskiIletimHizi,
    secondValue: toplamYeniIletimHizi,
  });

  let yeniFatura = lastBill * ((100 + yuzdelikDegisim) / 100);
  let toplamMaliyet = toplaSayilari(insulations, "price");

  let tasarruf = +lastBill - +yeniFatura;
  let amortiYil = +(toplamMaliyet / tasarruf).toFixed(2);

  return {
    savingPercentage: yuzdelikDegisim,
    newBill: yeniFatura,
    amortiYil: amortiYil,
    toplamMaliyet: toplamMaliyet,
  };
}
