import React from "react";
import '../stylesheets/Forecast.css'
import { v4 as uuidv4 } from "uuid"

const Forecast = ({ results }) => {

    const decideImg = (data) => {
        if(data.Day.IconPhrase === "Rain") {
            return "imgs/LightRain.png";
        } else if(data.Day.IconPhrase === "Showers") {
            return "imgs/Shower.png";
        } else if(data.Day.IconPhrase === "Mostly cloudy w/ showers") {
            return "imgs/Shower.png";
        } else if(data.Day.IconPhrase === "Mostly cloudy") {
            return "imgs/LightCloud.png";
        }
    };

    const getDay = (dayVal) => {
        const timeElapsed = Date.now();
        let today = new Date(timeElapsed);
        today.setDate(today.getDate() + dayVal);

        let fullStringArr = Array.from(today.toUTCString());
        fullStringArr.length = 12;

        return fullStringArr.join('')
    } 

    const renderBoxes = () => {
        return results.map((_box, indx) => (
            <div key={uuidv4()} className="forecast-box">
                <h3>{indx === 0 ? 'Tomorrow' : getDay(indx)}</h3>
                <div className="forecast-img">
                    <img src={decideImg(results[indx])} alt="" />
                </div>

                <div className="forecast-info">
                    <div>
                        <h4>{results[indx].Temperature.Maximum.Value}</h4>
                        <span>°F</span>
                    </div>

                    <div>
                        <h4>{results[indx].Temperature.Minimum.Value}</h4>
                        <span>°F</span>
                    </div>

                </div>
            </div>
        ))
    };

    return (
        // Make each box into component
        // Pass entire data literal array into each box
        <div className="forecast-grid">
            {renderBoxes()}
        </div>
    )
}

export default Forecast;