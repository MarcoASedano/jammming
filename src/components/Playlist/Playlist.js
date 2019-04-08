import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue='New Playlist' />
        <Tracklist trackAction="-" tracks={this.props.playlistTracks} removeTrackFromPlaylist={this.props.removeTrackFromPlaylist} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;