import React from 'react';
import './Track.css';

class Track extends React.Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artists[0].name} | {this.props.track.album.name}</p>
        </div>
        <a class="Track-action">+</a>
      </div>
    );
  }
}

export default Track;