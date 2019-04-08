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

  async searchSpotify(input) {
    let tracks = await Spotify.search(input);
    this.setState({
      searchTracks: tracks
    });
  }

  addTrackToPlaylist(track) {
    let tracks = this.state.playlistTracks;
    for (let i = 0; i < tracks.length; i++) {
      if (track.id === tracks[i].id) {
        return;
      }
    }

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
        console.log(`${tracks[i]}`);
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
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
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
