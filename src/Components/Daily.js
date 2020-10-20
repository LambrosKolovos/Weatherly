import React from 'react';
import "../CSS/Daily.css";
import weatherIcon from '../weatherIcon.js';

const isToday = (str) => {
    if(str === 'True')
        return true;
    else
        return false;
}
export const Daily = ( {day, icon, max, min, bool} ) => {
    return (
        <div className={isToday(bool)? `daily-card today` : `daily-card`}>
            <div style={{paddingBottom: "10px"}}>
                {day}
            </div>
            <div style={{fontSize: "40px"}}>
                {weatherIcon(icon)}
            </div>
            <div style={{fontWeight: "600", fontSize: "25px"}}>
                {max}°C
            </div>
            <div style={{fontWeight: "200", fontSize: "15px", color: "lightgray"}}> 
                {min}°C
            </div>
        </div>
    )
}

export default(Daily)
