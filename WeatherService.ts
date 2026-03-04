const axios = require("axios");

export class WeatherService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = "https://wttr.in";
    }

    async getWeather(city: string): Promise<string> {
        try {
            const response = await axios.get(`${this.apiUrl}/${city}?format=3`);
            return response.data;
        } catch (err: any) {
            throw new Error(`Failed to fetch weather: ${err.message}`);
        }
    }
}
