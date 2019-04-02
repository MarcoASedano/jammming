import React from 'react';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div class="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={this.props.searchTracks} />
      </div>
    );
  }
}

export default SearchResults;