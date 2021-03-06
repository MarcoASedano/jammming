import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="Tracklist">
      {
        this.props.tracks.map(track => {
          return <Track key={track.id} track={track} trackAction={this.props.trackAction}
          addTrackToPlaylist={this.props.addTrackToPlaylist}
          removeTrackFromPlaylist={this.props.removeTrackFromPlaylist} />
        })
      }
      </div>
    );
  }
}

export default Tracklist;