import React from "react"; 
import axios from "axios";

export default function Weather(props){
function handleResponse(response) {
    alert (`The weather in ${response.data.name} is ${response.data.main.temp} degrees`)
}

    let apiKey = "82bbb45f7e5c0748dea7c663aa9db34d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>subtitle for weather app</h2>
    );
} 