const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-select2"); // moeda de origem
const currencySelectTo = document.querySelector(".currency-select"); // moeda destino

const exchangeRates = {
  real: 1,
  dolar: 5.2,
  euro: 6.2,
  libra: 6.9,
  bitcoin: 100000,
};

const currencyFormats = {
  real: { locale: "pt-BR", currency: "BRL" },
  dolar: { locale: "en-US", currency: "USD" },
  euro: { locale: "de-DE", currency: "EUR" },
  libra: { locale: "en-GB", currency: "GBP" },
  bitcoin: { locale: "en-US", currency: "BTC" },
};

const currencyNames = {
  real: "Real Brasileiro",
  dolar: "Dólar Americano",
  euro: "Euro",
  libra: "Libra",
  bitcoin: "Bitcoin",
};

const currencyImages = {
  real: "./../../../img/Real.png",
  dolar: "./../../../img/Dolar.png",
  euro: "./../../../img/Euro.png",
  libra: "./../../../img/Libra.png",
  bitcoin: "./../../../img/Bitcoin.png",
};

const updateCurrencyDisplay = (currency, nameId, imgSelector, valueSelector, amount = 0) => {
  const currencyName = document.getElementById(nameId);
  const currencyImage = document.querySelector(imgSelector);
  const valueElement = document.querySelector(valueSelector);

  currencyName.innerHTML = currencyNames[currency];
  currencyImage.src = currencyImages[currency];

  valueElement.innerHTML = new Intl.NumberFormat(
    currencyFormats[currency].locale,
    { style: "currency", currency: currencyFormats[currency].currency }
  ).format(amount);
};

const convertAmount = (amount, fromCurrency, toCurrency) => {
  const amountInReal = amount * exchangeRates[fromCurrency];
  return amountInReal / exchangeRates[toCurrency];
};

const convertAll = () => {
  const inputAmount = Number(document.querySelector(".input-currency").value);
  const fromCurrency = currencySelectFrom.value;
  const toCurrency = currencySelectTo.value;

  if (isNaN(inputAmount) || inputAmount <= 0) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  const convertedAmount = convertAmount(inputAmount, fromCurrency, toCurrency);

  // Atualiza moeda de origem (valor digitado)
  updateCurrencyDisplay(fromCurrency, "currency-name-convert", ".currency-img2", ".currency-value-to-convert", inputAmount);

  // Atualiza moeda destino (valor convertido)
  updateCurrencyDisplay(toCurrency, "currency-name-converted", ".currency-img", ".currency-value", convertedAmount);
};

// Atualiza displays ao mudar selects, com valor zero
currencySelectFrom.addEventListener("change", () => {
  updateCurrencyDisplay(currencySelectFrom.value, "currency-name-convert", ".currency-img2", ".currency-value-to-convert", 0);
});

currencySelectTo.addEventListener("change", () => {
  updateCurrencyDisplay(currencySelectTo.value, "currency-name-converted", ".currency-img", ".currency-value", 0);
});

convertButton.addEventListener("click", convertAll);

// Inicializa displays com valores padrão (zero)
updateCurrencyDisplay(currencySelectFrom.value, "currency-name-convert", ".currency-img2", ".currency-value-to-convert", 0);
updateCurrencyDisplay(currencySelectTo.value, "currency-name-converted", ".currency-img", ".currency-value", 0);