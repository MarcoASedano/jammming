import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class Tracklist extends React.Component {
  render() {
    return (
      <div class="Tracklist">
      {
        this.props.tracks.map(track => {
          return <Track key={track.id} track={track} />
        });
      }
      </div>
    );
  }
}

export default Tracklist;