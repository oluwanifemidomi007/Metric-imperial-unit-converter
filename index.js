let inputEl = document.getElementById("input-btn");

let convertBtn = document.getElementById("convert-btn");

let conversionTextLength = document.getElementById("conversion--text-length");

let conversionTextVolume = document.getElementById("conversion--text-volume");

let conversionTextMass = document.getElementById("conversion--text-mass");

convertBtn.addEventListener("click", function () {
  let inputValue = Number(inputEl.value);

  conversionLength(inputValue);

  conversionVolume(inputValue);

  conversionMass(inputValue);
});

function conversionLength(number) {
  let feetConversion = number * 3.2808;
  let meterConversion = number / 3.2808;
  conversionTextLength.textContent = `${number} meters = ${feetConversion.toFixed(
    3
  )} | ${number} feet = ${meterConversion.toFixed(3)} meters`;
}

function conversionVolume(number) {
  let litresConversion = number * 3.7854;
  let gallonsConversion = number / 3.7854;
  conversionTextVolume.textContent = `${number} gallons = ${litresConversion.toFixed(
    3
  )} | ${number} litres = ${gallonsConversion.toFixed(3)} litres`;
}

function conversionMass(number) {
  let kilosConversion = number * 2.2046;
  let poundsConversion = number / 2.2046;
  conversionTextMass.textContent = `${number} kilos = ${kilosConversion.toFixed(
    3
  )} | ${number} pounds = ${poundsConversion.toFixed(3)} pounds`;
}
