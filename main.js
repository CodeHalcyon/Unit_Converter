console.log(12);
let a, b, x;
let txt = document.getElementById("textDisplay");
let input_temp = document.getElementById("input-temp-to");
function GetValue() {
  a = document.getElementById("temp-to").value;
  console.log(a);
  b = document.getElementById("to-temp").value;
  console.log(b);

  x = Number.parseFloat(input_temp.value);
  console.log(x)
  if (isNaN(x)) {
    alert("Enter the value!");
    input_temp.focus();
  }
  else {
    if (
      (a == "Kelvin" && b == "Kelvin") ||
      (a == "Celsius" && b == "Celsius") ||
      (a == "Fahrenheit" && b == "Fahrenheit")
    )
      BothSameTemp();
    else if (a == "Celsius" && b == "Kelvin") celsiusTokelvin();
    else if (a == "Celsius" && b == "Fahrenheit") celsiusTofarenheit();
    else if (a == "Fahrenheit" && b == "Celsius") farenheitTocelsius();
    else if (a == "Fahrenheit" && b == "Kelvin") farenheitTokelvin();
    else if (a == "Kelvin" && b == "Celsius") kelvinTocelsius();
    else kelvinTofarenheit();
  }
}

function BothSameTemp() {
  txt.innerText = "Select a different scale !!";
}

function celsiusTokelvin() {
  let result = (x + 273.15).toFixed(2);
  txt.innerHTML = "Temperature in " + b + " is " + result +"K";
}
function celsiusTofarenheit() {
  let result = (x * (9 / 5) + 32).toFixed(2);
  txt.innerHTML = "Temperature in " + b + " is " + result+"&#176;F";
}

function farenheitTocelsius() {
  let result = ((x - 32) * (5 / 9)).toFixed(2);
  txt.innerHTML = "Temperature in " + b + " is " + result+"&#176;C";
}
function farenheitTokelvin() {
  let result = ((x - 32) * (5 / 9) + 273.15).toFixed(2);
  txt.innerHTML = "Temperature in " + b + " is " + result+"K";
}

function kelvinTofarenheit() {
  let result = ((x - 273.15) * (9 / 5) + 32).toFixed(2);
  txt.innerHTML = "Temperature in " + b + " is " + result+"&#176;F";
}
function kelvinTocelsius() {
  let result = (x - 273.15).toFixed(2);
  txt.innerHTML = "Temperature in " + b + " is " + result+"&#176;C";
}
