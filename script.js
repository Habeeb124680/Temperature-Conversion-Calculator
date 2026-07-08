const textbox = document.getElementById("textbox");
const fahrenheitCelsius = document.getElementById("fahrenheitCelsius");
const celsiusFahrenheit = document.getElementById("celsiusFahrenheit");
const kelvinCelsius = document.getElementById("kelvinCelsius");
const kelvinFahrenheit = document.getElementById("kelvinFahrenheit");
const celsiusKelvin = document.getElementById("celsiusKelvin");
const fahrenheitKelvin = document.getElementById("fahrenheitKelvin");
const result = document.getElementById("result");
let temp;
function convert() {

    if(celsiusFahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp*9/5 + 32;
        result.textContent = temp + "°F";
    } 
    else if(fahrenheitCelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp-32)*5/9 ;
        result.textContent = temp + "°C";
    }
    else if(kelvinCelsius.checked) {
        temp = Number(textbox.value);
        temp = temp - 273 ;
        result.textContent = temp + "°C";
    }
    else if(kelvinFahrenheit.checked) {
        temp = Number(textbox.value);
        temp = (temp-273)*9/5 + 32 ;
        result.textContent = temp + "°F";
    }
    else if(celsiusKelvin.checked) {
        temp = Number(textbox.value);
        temp = temp + 273 ;
        result.textContent = temp + "K";
    }
    else if(fahrenheitKelvin.checked) {
        temp = Number(textbox.value);
        temp = (temp-32)*5/9 + 273 ;
        result.textContent = temp + "K";
    }
    else {
        result.textContent = "Select a valid unit.";
    }
} 