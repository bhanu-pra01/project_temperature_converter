const temperatureInput = document.getElementById('temperature-input');
const celsiusOutput = document.getElementById('celsius-output');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const kelvinOutput = document.getElementById('kelvin-output');
const convertBtn = document.getElementById('convert-btn');
const invalidParaOutput = document.getElementById('invalid-para');

convertBtn.addEventListener('click', () => {
    const userInputValue = temperatureInput.value;
    const length = userInputValue.length;

    const temperature = parseFloat(userInputValue);

    let lastLetter = userInputValue[length - 1].toUpperCase();

    switch (lastLetter) {
        case "C":
            celsiusOutput.value = temperature.toFixed(2);
            let Fc = (temperature * 9 / 5) + 32;
            fahrenheitOutput.value = Fc.toFixed(2);
            let Kc = temperature + 273.15;
            kelvinOutput.value = Kc.toFixed(2);
            invalidParaOutput.textContent = "";
            break;

        case "K":
            let Ck = temperature - 273.15;
            celsiusOutput.value = Ck.toFixed(2);
            let Fk = (Ck * 9 / 5) + 32;
            fahrenheitOutput.value = Fk.toFixed(2);
            kelvinOutput.value = temperature.toFixed(2);
            invalidParaOutput.textContent = "";
            break;

        case "F":
            let Cf = (temperature - 32) * 5 / 9;
            celsiusOutput.value = Cf.toFixed(2);
            fahrenheitOutput.value = temperature.toFixed(2);
            let Kf = (Cf + 273.15);
            kelvinOutput.value = Kf.toFixed(2);
            invalidParaOutput.textContent = "";
            break;

        default:
            celsiusOutput.value = "";
            fahrenheitOutput.value = "";
            kelvinOutput.value = "";
            invalidParaOutput.textContent = "Please enter a valid temperature";
            break;
    }
});
