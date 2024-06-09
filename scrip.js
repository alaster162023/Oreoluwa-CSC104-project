

//let confirm=("there are 7 days in the week T/F")

//simple interest calculator
let p=prompt(`what is the principal` )
let r=prompt(`what is the rate `)
let t=prompt(`what is time`)

i=(p*r*t)/100
alert(`the simple interest was ${i}`)

//gpa calculator
var grade1 = parseFloat(prompt("Enter grade for course 1 (out of 5):"));
var grade2 = parseFloat(prompt("Enter grade for course 2 (out of 5):"));
var grade3 = parseFloat(prompt("Enter grade for course 3 (out of 5):"));
var grade4 = parseFloat(prompt("Enter grade for course 4 (out of 5):"));
var grade5 = parseFloat(prompt("Enter grade for course 5 (out of 5):"))

var totalGradePoints = grade1 + grade2 + grade3 + grade4 + grade5;
var gpa = totalGradePoints / 5;
alert("Your GPA is: " + gpa.toFixed(2))


// temperature converter
var temperature = prompt("Enter the temperature:");
var scale = prompt("Enter the scale (Celsius or Fahrenheit):");
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
if (scale.toLowerCase() === "celsius") {
  var fahrenheit = celsiusToFahrenheit(parseFloat(temperature));
  alert("Temperature in Fahrenheit: " + fahrenheit.toFixed(2));
} else if (scale.toLowerCase() === "fahrenheit") {
  var celsius = fahrenheitToCelsius(parseFloat(temperature));
  alert("Temperature in Celsius: " + celsius.toFixed(2));
} else {
  alert("Invalid scale. Please enter Celsius or Fahrenheit.");
}

//currency converter
  var amount = prompt("Enter amount in Naira:");
  var currency = prompt("Enter currency to convert to (EUR, GBP, USD,CAD):");
  var exchangeRate = getExchangeRate(currency);
  var convertedAmount = amount / exchangeRate;
  alert(amount + "naira is equal to " + convertedAmount.toFixed(2) + " " + currency);

function getExchangeRate(currency) {
  var exchangeRates = {
      "EUR": 1570.25,
      "GBP": 1843.84,
      "USD": 1447.63,
      "CAD": 1200.54,
  };

  if (currency in exchangeRates) {
      return exchangeRates[currency];

}
}


var principal = parseFloat(prompt("Enter the principal amount:"));

var rate = parseFloat(prompt("Enter the annual interest rate (in percentage):"));

var time = parseInt(prompt("Enter the time period (in years):"));


var frequency = parseInt(prompt("Enter the compound frequency per year:"));

var amount = principal * Math.pow((1 + (rate / (100 * frequency))), (frequency * time));

var interest = amount - principal;
alert(`the simple interest was ${interest}`)
