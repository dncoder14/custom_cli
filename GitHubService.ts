const axios = require("axios");

export class GitHubService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = "https://api.github.com/users";
    }

    async getUserInfo(username: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/${username}`);
            return {
                name: response.data.name || 'N/A',
                bio: response.data.bio || 'N/A',
                followers: response.data.followers,
                following: response.data.following,
                repos: response.data.public_repos,
                location: response.data.location || 'N/A'
            };
        } catch (err: any) {
            throw new Error(`Failed to fetch GitHub user: ${err.message}`);
        }
    }
}
