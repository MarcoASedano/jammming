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
      playlistTracks: [],
      playlistName: 'New Playlist'
    }

    this.searchSpotify = this.searchSpotify.bind(this);
    this.addTrackToPlaylist = this.addTrackToPlaylist.bind(this);
    this.removeTrackFromPlaylist = this.removeTrackFromPlaylist.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
  }

  async searchSpotify(input) {
    let tracks = await Spotify.search(input);

    if (tracks) {
      this.setState({
        searchTracks: tracks
      });
    }
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
        tracks.splice(i, 1);
        break;
      }
    }

    this.setState({
      playlistTracks: tracks
    });
  }

  handlePlaylistNameChange(name) {
    this.setState({
      playlistName: name
    });
  }

  async savePlaylist() {
    try {
      let playlistURIs = this.state.playlistTracks.map(track => track.uri);
      if (playlistURIs) {
        let playlistCreated = await Spotify.savePlaylist(this.state.playlistName, playlistURIs);

        if (playlistCreated) {
          this.setState({
            playlistTracks: [],
            playlistName: 'New Playlist'
          })
          return;
        }
      }
      throw new Error('There was an error when creating the playlist in Spotify');
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar searchSpotify={this.searchSpotify} />
            <div className="App-playlist">
              <SearchResults searchTracks={this.state.searchTracks} addTrackToPlaylist={this.addTrackToPlaylist} />
              <Playlist playlistTracks={this.state.playlistTracks} removeTrackFromPlaylist={this.removeTrackFromPlaylist} savePlaylist={this.savePlaylist} handlePlaylistNameChange={this.handlePlaylistNameChange} playlistName={this.state.playlistName}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
