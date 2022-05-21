import React, { useState, useEffect } from "react";
import Current from "./Current";
import axios from "axios";
import '../stylesheets/App.css'
import Forecast from "./Forecast";

const App = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {

        const getWeatherData = async () => {
            const {data} = await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/326619', {
                params: {
                    apikey: 'ihocT81f73quAmHurYRhjlAcFiBTbEnk',
                    language: 'en-us',
                    details: false,
                    metric: false,
                }

            });

            setResults(data.DailyForecasts);

        };

        getWeatherData();

    }, [])

    const renderWeather = () => {
        if(results.length > 0) {
            console.log(results);
            return (
                <div className="App">
                    <Current 
                        weatherImg={"imgs/Shower.png"}
                        temp={results[0].Temperature.Maximum.Value}
                        weatherDesc={results[0].Day.IconPhrase}
                    />

                    <Forecast
                        results={results}
                    />
                </div>
            )
        }
    }

    return (
        renderWeather()
    )
}

export default App;