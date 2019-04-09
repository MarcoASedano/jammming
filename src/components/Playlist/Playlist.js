import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistName: 'New Playlist'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSavePlaylist = this.handleSavePlaylist.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      playlistName: event.target.value
    })
  }

  handleSavePlaylist(event) {
    this.props.savePlaylist(this.state.playlistName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleInputChange} defaultValue='New Playlist' />
        <Tracklist trackAction="-" tracks={this.props.playlistTracks} removeTrackFromPlaylist={this.props.removeTrackFromPlaylist} />
        <a className="Playlist-save" onClick={this.handleSavePlaylist}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
