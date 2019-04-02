import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTracks: []
    }
    
    this.searchSpotify = this.searchSpotify.bind(this);
  }
  
  searchSpotify(input) {
    this.setState({
      searchTracks: Spotify.tracks.items
    });
  }
  
  render() {
    return (
        <div>
          <h1>Ja<span class="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar searchSpotify={this.searchSpotify} />
            <div className="App-playlist">
              <SearchResults searchTracks={this.state.searchTracks}/>
              <div className="Playlist">
                <input value='New Playlist' />
                
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
