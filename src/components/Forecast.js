import React from "react";
import '../stylesheets/Forecast.css'

const Forecast = ({ img1, img2, img3, img4, img5 }) => {
    return (
        <div className="forecast-grid">
            <div className="forecast-box">
                <h3>Tomorrow</h3>
                <img src={img1} alt="" />
            </div>

            <div className="forecast-box">
                <h3>Tomorrow</h3>
                <img src={img2} alt="" />
            </div>

            <div className="forecast-box">
                <h3>Tomorrow</h3>
                <img src={img3} alt="" />
            </div>

            <div className="forecast-box">
                <h3>Tomorrow</h3>
                <img src={img4} alt="" />
            </div>

            <div className="forecast-box">
                <h3>Tomorrow</h3>
                <img src={img5} alt="" />
            </div>
        </div>
    )
}

export default Forecast;