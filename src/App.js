import React, {Component} from 'react';
import './CSS/App.css';
import Extra from './Components/Extra.js';
import Preview from "./Components/Preview.js";
import SearchField from "./Components/SearchField.js"; 
import Daily from "./Components/Daily.js";

const URL_CURRENT = 'https://api.openweathermap.org/data/2.5/weather?q=';
const URL_WEEKLY = 'https://api.openweathermap.org/data/2.5/onecall?';
const weeklyOnly = '&exclude=current,minutely,hourly,alerts';
const API_KEY = '&appid=fa8ad03028a76823bc81af28b4cf6716';

const convertToCelcious = (temp) => {
  return Math.round(temp - 273.15, 2);
}

const getHour = (seconds) => {
    return Math.floor(seconds / 3600);
}

const getMinutes = (seconds) => {
    return Math.round(seconds / 60);
}

const getWeekDay = () => {
  var day = new Date();
  var week = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  var result = new Array()
 
  for (let i = 0; i < week.length; i++) {
    result.push(week[(day.getDay() + i) % 7]);
  }

  return result;
}

class App extends Component{

  state = {
    visible: false,
    input: "",
    city_name: "",
    country: "",
    current_temp: 0,
    feels_like: 0,
    weather_status: "",
    weather_description: "",
    lat: 0,
    lon: 0,
    humidity: 0,
    chance_of_rain: 0,
    speed: 0,
    sunrise: 0,
    sunset: 0,
    daytime: 0,
    mapping_var: [],
    weekdays: [],
    weekly_temps_min: [],
    weekly_temps_max: []
  };
  
  buttonClick = async () => {
  
    const currentWeather = fetch(URL_CURRENT + this.state.input + API_KEY)
    const res1 = await (await currentWeather).json()

    this.setState({
      city_name: this.state.input,
      lat: res1.coord.lat,
      lon: res1.coord.lon,
      country: res1.sys.country,
      current_temp: convertToCelcious(res1.main.temp),
      feels_like: convertToCelcious(res1.main.feels_like),
      weather_status: res1.weather[0].main,
      weather_description: res1.weather[0].description,
      weekly_temps_max: [],
      weekly_temps_min: []
    })

    const weeklyWeather = fetch(URL_WEEKLY + "lat=" + this.state.lat + "&lon=" + this.state.lon + weeklyOnly + API_KEY)
    const res2 = await (await weeklyWeather).json()

    this.setState({
      humidity: res2.daily[0].humidity,
      chance_of_rain: res2.daily[0].pop * 100,
      speed: res2.daily[0].wind_speed,
      sunrise: res2.daily[0].sunrise,
      sunset: res2.daily[0].sunset,
      
      mapping_var: getWeekDay().map(item => {
        this.state.weekdays.push(item)
      }),
      mapping_var: res2.daily.map(item => {
        this.state.weekly_temps_min.push(convertToCelcious(item.temp.min))
      }),
      mapping_var: res2.daily.map(item => {
        this.state.weekly_temps_max.push(convertToCelcious(item.temp.max))
      })
    })

    this.setState({
      daytime: this.state.sunset - this.state.sunrise
    })

    let totalTime = this.state.daytime
    let hour = getHour(totalTime);
    let minute = getMinutes(totalTime - hour*3600);

    console.log(totalTime)
    console.log(hour)
    console.log(minute)

    this.setState({
      daytime: hour + "h " + minute + "m",
      visible: true
    })
  
  }

  enterFunction = (e) => {
    if(e.key === 'Enter'){
      this.buttonClick()
    }
  }

  getText = (e) => {
    this.setState({
      input: e.target.value
    })
  }


  render(){
    return (
      <div className="App">
        <div className="upper-body">
          <div className={this.state.visible? 'temperature-preview fade': 'hide-upper'}>
            <Preview 
              description={this.state.weather_description}
              type={this.state.weather_status} 
              city={this.state.city_name}
              country={this.state.country}
              temperature={this.state.current_temp}
              feelslike={this.state.feels_like}
            />
          </div>
          <div className="search-city">
            <SearchField inputFunction={this.getText} enterFunction={this.enterFunction} clickFunction={this.buttonClick}/>
          </div>
          <div className={this.state.visible? 'extras fade': 'hide-upper'}>
            <Extra title="Humidity" info={this.state.humidity} iconName="humidity" type="percent"></Extra>
            <Extra title="Chance of Rain" info={this.state.chance_of_rain} iconName="rain" type="percent"></Extra>
            <Extra title="Wind Speed" info={this.state.speed} iconName="wind" type="meters"></Extra>
            <Extra title="Daytime" info={this.state.daytime} iconName="daytime"></Extra>
          </div>
        </div>
        <div className={this.state.visible? `lower-body fade` : 'hide-lower'}>
          <Daily day={this.state.weekdays[0]} icon="Temp" max={this.state.weekly_temps_max[0]} min={this.state.weekly_temps_min[0]} bool="True"/>
          <Daily day={this.state.weekdays[1]} icon="Temp" max={this.state.weekly_temps_max[1]} min={this.state.weekly_temps_min[1]} />
          <Daily day={this.state.weekdays[2]} icon="Temp" max={this.state.weekly_temps_max[2]} min={this.state.weekly_temps_min[2]} />
          <Daily day={this.state.weekdays[3]} icon="Temp" max={this.state.weekly_temps_max[3]} min={this.state.weekly_temps_min[3]} />
          <Daily day={this.state.weekdays[4]} icon="Temp" max={this.state.weekly_temps_max[4]} min={this.state.weekly_temps_min[4]} />
          <Daily day={this.state.weekdays[5]} icon="Temp" max={this.state.weekly_temps_max[5]} min={this.state.weekly_temps_min[5]} />
          <Daily day={this.state.weekdays[6]} icon="Temp" max={this.state.weekly_temps_max[6]} min={this.state.weekly_temps_min[6]} />
        </div>

      </div>
    );
  }
}

export default App;
