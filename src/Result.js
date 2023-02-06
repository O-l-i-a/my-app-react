import React, { useState } from "react";
import axios from "axios";

import { RotatingLines } from "react-loader-spinner";

export default function Search(props) {
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [icon, setIcon] = useState("");
  let [wind, setWind] = useState("");
  let iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let key = "c119ffef35b7245a5e03b6e5724ae961";
  let call = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
  axios.get(call).then(displayWeather);
  function displayWeather(response) {
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDesc(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
    setWind(response.data.wind.speed);
  }
  if (temp) {
    return (
      <ul>
        <li>Temperature: {temp}*C</li>
        <li>Description: {desc}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
        <li>
          <img src={iconLink} alt={desc} />
        </li>
      </ul>
    );
  } else {
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
}
