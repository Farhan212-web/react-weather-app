import React from "react";
import '../stylesheets/Current.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs, faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Current = ({ weatherImg, temp, weatherDesc }) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let fullStringArr = Array.from(today.toUTCString());
    fullStringArr.length = 16;

    let formattedString = fullStringArr.join('');

    return (
        <div className="left-panel">
            <div className="buttons">
                <button>Search for places</button>
                <button><FontAwesomeIcon icon={faLocationCrosshairs} /></button>
            </div>

            <div className="main-panel">
                <img className="weather-img" src={weatherImg} alt="" />

                <div className="temp-info">
                    <h1 className="current-temp" style={{display : 'inline-block'}}>{temp}</h1>
                    <span>°F</span>
                </div>

            </div>

            <div className="weather-display">
                <h2>{weatherDesc}</h2>

                <div className="date-info">
                    <h4>Today</h4>
                    <h4>{formattedString}</h4>
                </div>

                <div className="current-loc">
                    <FontAwesomeIcon icon={faLocationPin} />
                    <h4 className="loc-tag">Aberdeen</h4>
                </div>

            </div>
        </div>
    )
}

export default Current;