const CLIENT_ID = '540f2aed8bcf4f74b9349bb7deeb4f04';
const REDIRECT_URI = 'http://localhost:3000/';
let accessToken = '';
let expirationTime = '';

const Spotify = {
  async getAccessToken() {
     try {
      let accessTokenFromURL = window.location.href.match(/access_token=([^&]*)/);
      let expirationTimeFromURL = window.location.href.match(/expires_in=([^&]*)/);

      if (accessToken) {
        return accessToken;
      } else if (accessTokenFromURL && expirationTimeFromURL) {
        accessToken = accessTokenFromURL[1];
        let expirationTime = expirationTimeFromURL[1];

        window.setTimeout(() => accessToken = '', expirationTime * 1000);
        window.history.pushState('Access Token', null, '/');

      } else if (!accessToken && !accessTokenFromURL) {
        window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
      }

      throw new Error('Failed to get Access Token!');
    } catch(error) {
      console.log(error);
    }

  },

  async search(input) {
    try {
      let currentAccessToken = await this.getAccessToken();
      let body = {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`
        }
      };

      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${input}`, body);

      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.tracks.items.length > 0) {
          return jsonResponse.tracks.items
        } else {
          return [];
        }
      }
      throw new Error('Spotify Search Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
}

export default Spotify;
