import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    if (this.props.trackAction === '+') {
      this.props.addTrackToPlaylist(this.props.track);
    } else if (this.props.trackAction === '-') {
      this.props.removeTrackFromPlaylist(this.props.track)
    }
  }
  
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artists[0].name} | {this.props.track.album.name}</p>
        </div>
        <a className="Track-action" onClick={this.handleClick}>{this.props.trackAction}</a>
      </div>
    );
  }
}

export default Track;