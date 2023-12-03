import { apiKey } from "./environment.js";

function ApiCall() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.694879&lon=-120.984809&appid=${apiKey}`)
        
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(Math.round(((data.main.temp) - 273.15) * 9 / 5 + 32))
            let tempDgr = document.getElementById('tempDgr');
            tempDgr.textContent = ("The temp in here is = " +  (Math.round(((data.main.temp) - 273.15) * 9 / 5 + 32)) + " degree fahrenheit!")
            
        })
}

ApiCall();