export function calculatePercentageChange({ firstValue, secondValue }) {
  const percentageChange =
    ((secondValue - firstValue) / Math.abs(firstValue)) * 100;

  return +percentageChange.toFixed(2);
}

export function nullChecker({ object = {}, exceptKeys = [] }) {
  let nullKeys = [];
  for (let [key, value] in Object.entries(object)) {
    if (!value && !exceptKeys.includes(value)) {
      nullKeys.push(key);
    }
  }
  return nullKeys;
}
export function toplaSayilari(array = [], anahtar) {
  // Sayı değerlerini topla
  const toplam = array.reduce((acc, item) => {
    const deger = item[anahtar];
    if (typeof deger === "number" && !isNaN(deger)) {
      return acc + deger;
    }
    return acc;
  }, 0);

  return toplam;
}
