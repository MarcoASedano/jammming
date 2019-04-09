import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch(event);
    }
  }

  handleSearch(event) {
    this.props.searchSpotify(this.state.input);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleInputChange} onKeyPress={this.handleOnKeyPress} placeholder="Enter A Song Title" />
        <a id="searchButton" onClick={this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
