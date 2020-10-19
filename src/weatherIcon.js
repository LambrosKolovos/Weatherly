import React from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti';
import {FiSun} from 'react-icons/fi';
import {WiRainWind} from 'react-icons/wi';
import {BiCloudSnow} from 'react-icons/bi';
import {WiDayThunderstorm} from 'react-icons/wi';
import {WiFog} from 'react-icons/wi';
import {FiCloudDrizzle} from 'react-icons/fi';
import {BsCloud} from 'react-icons/bs';

const weatherIcon = (name) => {
    switch(name){
        case 'Thunderstorm':
            return <WiDayThunderstorm/>
        case 'Drizzle':
            return <FiCloudDrizzle/>
        case 'Rain':
            return <WiRainWind/>
        case 'Snow':
            return <BiCloudSnow />
        case 'Clear':
            return <FiSun />
        case 'Atmosphere':
            return <WiFog />
        case 'Mist':
            return <WiFog />
        case 'Clouds':
            return <BsCloud />
        
        default:
            return <TiWeatherPartlySunny/>           
    }

}

export default weatherIcon;