const axios = require("axios");

export class WeatherService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = "https://api.open-meteo.com/v1/forecast";
    }

    async getWeather(city: string): Promise<string> {
        try {
            const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
            const geoResponse = await axios.get(geocodeUrl);
            
            if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
                throw new Error(`City not found: ${city}`);
            }
            
            const { latitude, longitude, name, country } = geoResponse.data.results[0];
            const weatherUrl = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
            const weatherResponse = await axios.get(weatherUrl);
            
            const weather = weatherResponse.data.current_weather;
            return `\n${name}, ${country}\nTemperature: ${weather.temperature}°C\nWind Speed: ${weather.windspeed} km/h\nWeather Code: ${weather.weathercode}`;
        } catch (err: any) {
            throw new Error(`Failed to fetch weather: ${err.message}`);
        }
    }
}
