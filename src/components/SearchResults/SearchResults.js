import React from 'react';
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

class SearchResults extends React.Component {  
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist trackAction="+" tracks={this.props.searchTracks} addTrackToPlaylist={this.props.addTrackToPlaylist} />
      </div>
    );
  }
}

export default SearchResults;