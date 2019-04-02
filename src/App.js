import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTracks = [];
    }
  }
  render() {
    return (
        <div>
          <h1>Ja<span class="highlight">mmm</span>ing</h1>
          <div class="App">
            <SearchBar searchSpotify={this.searchSpotify} />
            <div class="App-playlist">
              <SearchResults />
              <div class="Playlist">
                <input value='New Playlist' />
                
                <a class="Playlist-save">SAVE TO SPOTIFY</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
