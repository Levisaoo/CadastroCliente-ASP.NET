import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        const fetchWeather