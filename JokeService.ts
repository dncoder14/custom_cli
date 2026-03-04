const axios = require("axios");

export class JokeService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = "https://geek-jokes.sameerkumar.website/api?format=json";
    }

    async fetchJoke(): Promise<string> {
        try {
            const response = await axios.get(this.apiUrl);
            return response.data.joke;
        } catch (err) {
            throw new Error(`Failed to fetch joke: ${err}`);
        }
    }
}
