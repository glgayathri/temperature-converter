const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

roundNum = (num) => {
    return Math.round (num*100)/100
}

main = () => {
    celciusInput.addEventListener('input', ()=>{
        const cTemp = parseFloat(celciusInput.value);
        const fTemp = (cTemp * (9/5)) + 32;
        const kTemp = cTemp + 273.15;
        fahrenheitInput.value = roundNum(fTemp);
        kelvinInput.value = roundNum(kTemp);
    });
    
    fahrenheitInput.addEventListener('input', ()=>{
        const fTemp = parseFloat(fahrenheitInput.value);
        const cTemp = (fTemp - 32) * (5/9);
        const kTemp = (fTemp + 459.67) * (5/9);
        celciusInput = roundNum(cTemp);
        kelvinInput = roundNum(kTemp);
    });
    
    kelvinInput.addEventListener('input', ()=>{
        const kTemp = parseFloat(kelvinInput.value);
        const cTemp = kTemp -273.15;
        const fTemp = 9/5 * (kTemp - 273) + 32;
        celciusInput = roundNum(cTemp);
        fahrenheitInput = roundNum(fTemp);
    });
}

main();