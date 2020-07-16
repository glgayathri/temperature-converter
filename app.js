let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

roundNum = (num) => {
    return Math.round (num*100)/100;
}

celciusConverter = () => {
    const cTemp = parseFloat(celciusInput.value);
    console.log(celciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
};

fahrenheitConverter = () => {
    const fTemp = parseFloat(fahrenheitInput.value);
    console.log(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * (5 / 9);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
};

kelvinConverter = () => {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
};

celciusInput.addEventListener('input', celciusConverter);
fahrenheitInput.addEventListener('input', fahrenheitConverter);
kelvinInput.addEventListener('input', kelvinConverter);
