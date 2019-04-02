import React from 'react';
import './Track.css';

class Track extends React.Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.name}</h3>
          <p>{this.props.artist} | {this.props.album}</p>
        </div>
        <a class="Track-action">+</a>
      </div>
    );
  }
}