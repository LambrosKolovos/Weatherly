import React from 'react'
import '../CSS/Extra.css';
import {WiHumidity} from 'react-icons/wi';
import {BiWind} from 'react-icons/bi';
import {WiRainWind} from 'react-icons/wi';
import {FiSun} from 'react-icons/fi';

const getIcon = (iconName) => {
        switch(iconName){
            case 'humidity':
                return <WiHumidity/>
            case 'wind':
                return <BiWind/>
            case 'rain':
                return <WiRainWind/>
            case 'daytime':
                return <FiSun/>
            default:
                return NaN
        }
};

const getSymbol = (type) => {
    switch(type){
        case 'percent':
            return '%'
        case 'meters':
            return 'm/s'
        case 'time':
            return 'hrs'
        default:
            return ' '    
    }
}

const Extra = ({title, info, iconName, type}) => {
    return (
        <div className="main-body">
            <div className="icon-div">{getIcon(iconName)}</div>
            <div>
                <div className="title">
                    <div>{title}</div>
                </div> 
                <div className="info">
                    {info}{getSymbol(type)}
                </div> 
            </div>
        </div>
    )
}

export default Extra
