import React, { useState, useEffect } from "react";
import Current from "./Current";
import axios from "axios";
import '../stylesheets/App.css'
import Forecast from "./Forecast";

const App = () => {

    const [results, setResults] = useState([]);
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');

    const decideImg = (img, indx) => {

    }

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
                        img1={img1}
                        img2={img2}
                        img3={img3}
                        img4={img4}
                        img5={img5}
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