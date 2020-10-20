import React, {Component} from 'react';
import './CSS/App.css';
import Extra from './Components/Extra.js';
import Preview from "./Components/Preview.js";
import SearchField from "./Components/SearchField.js"; 
import Daily from "./Components/Daily.js";

const URL_CURRENT = 'https://api.openweathermap.org/data/2.5/weather?q=';
const URL_WEEKLY = 'https://api.openweathermap.org/data/2.5/onecall?';
const weeklyOnly = '&exclude=minutely,hourly,alerts';
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

const getWeekDay = (zone) => {

  //Get local time
  var d = new Date()
  var localTime = d.getTime()
  var localOffset = d.getTimezoneOffset() * 60000
  var UTC = localTime + localOffset

  //Convert to city fetched time
  var city_searched_time = UTC + (1000 * zone)  
  var day = new Date(city_searched_time);
  
  console.log(day.getDay());
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var result =[] 
 
  for (let i = 0; i < week.length; i++) {
    if( i === 0)
      console.log("Week starting from: " + week[(day.getDay() + i) % 7])
    result.push(week[(day.getDay() + i) % 7]);
  }

  return result;
}

class App extends Component{

  state = {
    visible: false,
    warning: false,
    input: "",
    city_name: "",
    country: "",
    current_temp: 0,
    feels_like: 0,
    weather_status: "",
    weather_description: "",
    timestamp: 0,
    daily_status: [],
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
  
  display_current_weather = (res1) => {
    this.setState({
      city_name: this.state.input,
      lat: res1.coord.lat,
      lon: res1.coord.lon,
      country: res1.sys.country,
      current_temp: convertToCelcious(res1.main.temp),
      feels_like: convertToCelcious(res1.main.feels_like),
      weather_status: res1.weather[0].main,
      weather_description: res1.weather[0].description,
      weekdays: [],
      weekly_temps_max: [],
      weekly_temps_min: [],
      daily_status: []
    })
  }

  weekly_weather_call = async () => {
    const weeklyWeather = fetch(URL_WEEKLY + "lat=" + this.state.lat + "&lon=" + this.state.lon + weeklyOnly + API_KEY)
    const res2 = await (await weeklyWeather).json()
    //console.log(res2)

    this.setState({
      warning: false,

      humidity: res2.daily[0].humidity,
      chance_of_rain: res2.daily[0].pop * 100,
      speed: res2.daily[0].wind_speed,
      sunrise: res2.daily[0].sunrise,
      sunset: res2.daily[0].sunset,
      
      mapping_var: getWeekDay(res2.timezone_offset).map(item => {
        this.state.weekdays.push(item)
      }),
      mapping_var: res2.daily.map(item => {
        this.state.weekly_temps_min.push(convertToCelcious(item.temp.min))
      }),
      mapping_var: res2.daily.map(item => {
        this.state.weekly_temps_max.push(convertToCelcious(item.temp.max))
      }),
      mapping_var: res2.daily.map(item => {
        this.state.daily_status.push(item.weather[0].main)
      })
    })

    console.log(res2)
    console.log("Timestamp: " + res2.current.dt)
    this.setState({
      daytime: this.state.sunset - this.state.sunrise
    })

    let totalTime = this.state.daytime
    let hour = getHour(totalTime);
    let minute = getMinutes(totalTime - hour*3600);

    this.setState({
      daytime: hour + "h " + minute + "m",
      visible: true
    })
  }

  buttonClick = async () => {
  
    const currentWeather = fetch(URL_CURRENT + this.state.input + API_KEY)
    const res1 = await (await currentWeather).json()

    if(res1.cod === 200){
      this.display_current_weather(res1)
      this.weekly_weather_call()
    }
    else{
      this.setState({
        warning: true
      })
    }
  }

  enterFunction = (e) => {
    if(e.key === 'Enter'){
      if(this.state.input.trim() !== ""){
        this.buttonClick()
      }
      else{
        this.setState({
          warning: true
        })
      }
    }
  }

  getText = (e) => {
    this.setState({
      input: e.target.value,
      warning: false
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
            <div className={this.state.warning? `warn` : 'warn-hide'}>No such city found!</div>
          </div>
          
          <div className={this.state.visible? 'extras fade': 'hide-upper'}>
            <Extra title="Humidity" info={this.state.humidity} iconName="humidity" type="percent"></Extra>
            <Extra title="Chance of Rain" info={this.state.chance_of_rain} iconName="rain" type="percent"></Extra>
            <Extra title="Wind Speed" info={this.state.speed} iconName="wind" type="meters"></Extra>
            <Extra title="Daytime" info={this.state.daytime} iconName="daytime"></Extra>
          </div>
        </div>
        <div className={this.state.visible? `lower-body fade` : 'hide-lower'}>
          <Daily day={this.state.weekdays[0]} icon={this.state.daily_status[0]}
           max={this.state.weekly_temps_max[0]} min={this.state.weekly_temps_min[0]} bool="True"/>
          
          <Daily day={this.state.weekdays[1]} icon={this.state.daily_status[1]} 
          max={this.state.weekly_temps_max[1]} min={this.state.weekly_temps_min[1]} />
          
          <Daily day={this.state.weekdays[2]} icon={this.state.daily_status[2]}
           max={this.state.weekly_temps_max[2]} min={this.state.weekly_temps_min[2]} />
          
          <Daily day={this.state.weekdays[3]} icon={this.state.daily_status[3]}
           max={this.state.weekly_temps_max[3]} min={this.state.weekly_temps_min[3]} />
          
          <Daily day={this.state.weekdays[4]} icon={this.state.daily_status[4]}
           max={this.state.weekly_temps_max[4]} min={this.state.weekly_temps_min[4]} />
         
          <Daily day={this.state.weekdays[5]} icon={this.state.daily_status[5]}
           max={this.state.weekly_temps_max[5]} min={this.state.weekly_temps_min[5]} />
         
          <Daily day={this.state.weekdays[6]} icon={this.state.daily_status[6]}
           max={this.state.weekly_temps_max[6]} min={this.state.weekly_temps_min[6]} />
        </div>

      </div>
    );
  }
}

export default App;
