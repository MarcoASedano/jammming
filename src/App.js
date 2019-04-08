import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTracks: [],
      playlistTracks: []
    }
    
    this.searchSpotify = this.searchSpotify.bind(this);
    this.addTrackToPlaylist = this.addTrackToPlaylist.bind(this);
    this.removeTrackFromPlaylist = this.removeTrackFromPlaylist.bind(this);
  }
  
  searchSpotify(input) {
    this.setState({
      searchTracks: Spotify.tracks.items
    });
  }
  
  addTrackToPlaylist(track) {
    let tracks = this.state.playlistTracks;
    tracks.push(track);
    
    this.setState({
      playlistTracks: tracks
    });
  }
  
  removeTrackFromPlaylist(track) {
    let tracks = this.state.playlistTracks;
    // find track index using id and remove it
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].id === track.id) {
        tracks.splice(i, 1);
        break;
      }
    }
    
    this.setState({
      playlistTracks: tracks
    });
  }
  
  render() {
    return (
        <div>
          <h1>Ja<span class="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar searchSpotify={this.searchSpotify} />
            <div className="App-playlist">
              <SearchResults searchTracks={this.state.searchTracks} addTrackToPlaylist={this.addTrackToPlaylist} />
              <Playlist playlistTracks={this.state.playlistTracks} removeTrackFromPlaylist={this.removeTrackFromPlaylist} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
