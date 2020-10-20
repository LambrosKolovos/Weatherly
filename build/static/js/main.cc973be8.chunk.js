(this.webpackJsonpweatherly=this.webpackJsonpweatherly||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(10),r=a.n(s),l=(a(21),a(4)),c=a.n(l),m=a(7),o=a(8),u=a(11),d=a(12),p=a(15),y=a(14),h=(a(23),a(24),a(2)),_=a(5),f=a(3),w=function(e){var t=e.title,a=e.info,n=e.iconName,s=e.type;return i.a.createElement("div",{className:"main-body"},i.a.createElement("div",{className:"icon-div"},function(e){switch(e){case"humidity":return i.a.createElement(h.c,null);case"wind":return i.a.createElement(_.b,null);case"rain":return i.a.createElement(h.d,null);case"daytime":return i.a.createElement(f.b,null);default:return NaN}}(n)),i.a.createElement("div",null,i.a.createElement("div",{className:"title"},i.a.createElement("div",null,t)),i.a.createElement("div",{className:"info"},a,function(e){switch(e){case"percent":return"%";case"meters":return"m/s";case"time":return"hrs";default:return" "}}(s))))},E=a(13),v=a(6),k=function(e){switch(e){case"Thunderstorm":return i.a.createElement(h.a,null);case"Drizzle":return i.a.createElement(f.a,null);case"Rain":return i.a.createElement(h.d,null);case"Snow":return i.a.createElement(_.a,null);case"Clear":return i.a.createElement(f.b,null);case"Atmosphere":case"Mist":return i.a.createElement(h.b,null);case"Clouds":return i.a.createElement(v.a,null);default:return i.a.createElement(E.a,null)}},x=function(e){var t=e.type,a=e.description,n=e.city,s=e.country,r=e.temperature,l=e.feelslike;return i.a.createElement("div",null,i.a.createElement("div",{style:{fontSize:"40px"}},k(t)),i.a.createElement("div",{style:{fontWeight:"bold",fontSize:"20px",paddingBottom:"25px"}},a.charAt(0).toUpperCase()+a.slice(1)),i.a.createElement("div",{style:{fontSize:"20px"}},n.charAt(0).toUpperCase()+n.slice(1).toLowerCase(),", ",s),i.a.createElement("div",{style:{fontSize:"35px",fontWeight:"900"}},r,"\xb0C"),i.a.createElement("div",{style:{fontSize:"14px"}},"Feels like: ",l,"\xb0C"))},g=(a(25),function(e){var t=e.inputFunction,a=e.enterFunction,n=e.clickFunction;return i.a.createElement("div",{style:{display:"inline-flex"}},i.a.createElement("input",{className:"search-field",placeholder:"City name",placeholdertextcolor:"#e3071d",onKeyDown:a,onChange:t}),i.a.createElement("button",{className:"search-button",onClick:n},i.a.createElement(v.b,{style:{color:"white"}})))}),b=(a(26),function(e){var t,a=e.day,n=e.icon,s=e.max,r=e.min,l=e.bool;return i.a.createElement("div",{className:(t=l,"True"===t?"daily-card today":"daily-card")},i.a.createElement("div",{style:{paddingBottom:"10px"}},a),i.a.createElement("div",{style:{fontSize:"40px"}},k(n)),i.a.createElement("div",{style:{fontWeight:"600",fontSize:"25px"}},s,"\xb0C"),i.a.createElement("div",{style:{fontWeight:"200",fontSize:"15px",color:"lightgray"}},r,"\xb0C"))}),N="https://api.openweathermap.org/data/2.5/weather?q=",S="https://api.openweathermap.org/data/2.5/onecall?",C="&exclude=minutely,hourly,alerts",z="&appid=fa8ad03028a76823bc81af28b4cf6716",j=function(e){return Math.round(e-273.15,2)},F=function(e){return Math.floor(e/3600)},O=function(e){return Math.round(e/60)},T=function(e){var t=new Date,a=t.getTime(),n=6e4*t.getTimezoneOffset(),i=new Date(a+n+1e3*e);console.log(i.getDay());for(var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=[],l=0;l<s.length;l++)0===l&&console.log("Week starting from: "+s[(i.getDay()+l)%7]),r.push(s[(i.getDay()+l)%7]);return r},D=function(e){Object(p.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={visible:!1,warning:!1,input:"",city_name:"",country:"",current_temp:0,feels_like:0,weather_status:"",weather_description:"",timestamp:0,daily_status:[],lat:0,lon:0,humidity:0,chance_of_rain:0,speed:0,sunrise:0,sunset:0,daytime:0,mapping_var:[],weekdays:[],weekly_temps_min:[],weekly_temps_max:[]},e.display_current_weather=function(t){e.setState({city_name:e.state.input,lat:t.coord.lat,lon:t.coord.lon,country:t.sys.country,current_temp:j(t.main.temp),feels_like:j(t.main.feels_like),weather_status:t.weather[0].main,weather_description:t.weather[0].description,weekdays:[],weekly_temps_max:[],weekly_temps_min:[],daily_status:[]})},e.weekly_weather_call=Object(o.a)(c.a.mark((function t(){var a,n,i,s,r,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=fetch(S+"lat="+e.state.lat+"&lon="+e.state.lon+C+z),t.next=3,n;case 3:return t.next=5,t.sent.json();case 5:i=t.sent,e.setState((a={warning:!1,humidity:i.daily[0].humidity,chance_of_rain:100*i.daily[0].pop,speed:i.daily[0].wind_speed,sunrise:i.daily[0].sunrise,sunset:i.daily[0].sunset,mapping_var:T(i.timezone_offset).map((function(t){e.state.weekdays.push(t)}))},Object(m.a)(a,"mapping_var",i.daily.map((function(t){e.state.weekly_temps_min.push(j(t.temp.min))}))),Object(m.a)(a,"mapping_var",i.daily.map((function(t){e.state.weekly_temps_max.push(j(t.temp.max))}))),Object(m.a)(a,"mapping_var",i.daily.map((function(t){e.state.daily_status.push(t.weather[0].main)}))),a)),console.log(i),console.log("Timestamp: "+i.current.dt),e.setState({daytime:e.state.sunset-e.state.sunrise}),s=e.state.daytime,r=F(s),l=O(s-3600*r),e.setState({daytime:r+"h "+l+"m",visible:!0});case 14:case"end":return t.stop()}}),t)}))),e.buttonClick=Object(o.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=fetch(N+e.state.input+z),t.next=3,a;case 3:return t.next=5,t.sent.json();case 5:200===(n=t.sent).cod?(e.display_current_weather(n),e.weekly_weather_call()):e.setState({warning:!0});case 7:case"end":return t.stop()}}),t)}))),e.enterFunction=function(t){"Enter"===t.key&&(""!==e.state.input.trim()?e.buttonClick():e.setState({warning:!0}))},e.getText=function(t){e.setState({input:t.target.value,warning:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"upper-body"},i.a.createElement("div",{className:this.state.visible?"temperature-preview fade":"hide-upper"},i.a.createElement(x,{description:this.state.weather_description,type:this.state.weather_status,city:this.state.city_name,country:this.state.country,temperature:this.state.current_temp,feelslike:this.state.feels_like})),i.a.createElement("div",{className:"search-city"},i.a.createElement(g,{inputFunction:this.getText,enterFunction:this.enterFunction,clickFunction:this.buttonClick}),i.a.createElement("div",{className:this.state.warning?"warn":"warn-hide"},"No such city found!")),i.a.createElement("div",{className:this.state.visible?"extras fade":"hide-upper"},i.a.createElement(w,{title:"Humidity",info:this.state.humidity,iconName:"humidity",type:"percent"}),i.a.createElement(w,{title:"Chance of Rain",info:this.state.chance_of_rain,iconName:"rain",type:"percent"}),i.a.createElement(w,{title:"Wind Speed",info:this.state.speed,iconName:"wind",type:"meters"}),i.a.createElement(w,{title:"Daytime",info:this.state.daytime,iconName:"daytime"}))),i.a.createElement("div",{className:this.state.visible?"lower-body fade":"hide-lower"},i.a.createElement(b,{day:this.state.weekdays[0],icon:this.state.daily_status[0],max:this.state.weekly_temps_max[0],min:this.state.weekly_temps_min[0],bool:"True"}),i.a.createElement(b,{day:this.state.weekdays[1],icon:this.state.daily_status[1],max:this.state.weekly_temps_max[1],min:this.state.weekly_temps_min[1]}),i.a.createElement(b,{day:this.state.weekdays[2],icon:this.state.daily_status[2],max:this.state.weekly_temps_max[2],min:this.state.weekly_temps_min[2]}),i.a.createElement(b,{day:this.state.weekdays[3],icon:this.state.daily_status[3],max:this.state.weekly_temps_max[3],min:this.state.weekly_temps_min[3]}),i.a.createElement(b,{day:this.state.weekdays[4],icon:this.state.daily_status[4],max:this.state.weekly_temps_max[4],min:this.state.weekly_temps_min[4]}),i.a.createElement(b,{day:this.state.weekdays[5],icon:this.state.daily_status[5],max:this.state.weekly_temps_max[5],min:this.state.weekly_temps_min[5]}),i.a.createElement(b,{day:this.state.weekdays[6],icon:this.state.daily_status[6],max:this.state.weekly_temps_max[6],min:this.state.weekly_temps_min[6]})))}}]),a}(n.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc973be8.chunk.js.map