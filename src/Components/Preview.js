import React from 'react'
import weatherIcon from "../weatherIcon.js"

const Preview = ({type, description, city, country, temperature, feelslike}) => {
    return (
        <div>
            <div style={{fontSize: "40px"}}>
                {weatherIcon(type)}
            </div>
            <div style={{fontWeight: "bold", fontSize: "20px", paddingBottom: "25px"}}>
                {description.charAt(0).toUpperCase() + description.slice(1)}
            </div>
            <div style={{fontSize: "20px"}}>
                {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}, {country}
            </div>
            <div style={{fontSize: "35px", fontWeight: "900"}}>
                {temperature}°C
            </div>
            <div style={{fontSize: "14px"}}>Feels like: {feelslike}°C</div>
        </div>
    )
}

export default Preview
