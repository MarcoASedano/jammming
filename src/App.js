import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Ja<span class="highlight">mmm</span>ing</h1>
          <div class="App">
            <div class="SearchBar">
              <input placeholder="Enter A Song Title" />
              <a>SEARCH</a>
            </div>
            <div class="App-playlist">
              <div class="SearchResults">
                <h2>Results</h2>
                <div class="TrackList">
                  <div class="Track">
                    <div class="Track-information">
                      <h3>Tiny Dancer</h3>
                      <p>Elton John | Madman Across The Water</p>
                    </div>
                    <a class="Track-action">+</a>
                  </div>
                  <div class="Track">
                    <div class="Track-information">
                      <h3>Tiny Dancer</h3>
                      <p>Tim McGraw | Love Story</p>
                    </div>
                    <a class="Track-action">+</a>
                  </div>
                  <div class="Track">
                    <div class="Track-information">
                      <h3>Tiny Dancer</h3>
                      <p>Rockabye Baby! | Lullaby Renditions of Elton John</p>
                    </div>
                    <a class="Track-action">+</a>
                  </div>
                  <div class="Track">
                    <div class="Track-information">
                      <h3>Tiny Dancer</h3>
                      <p>The White Raven | Tiny Dancer</p>
                    </div>
                    <a class="Track-action">+</a>
                  </div>
                  <div class="Track">
                    <div class="Track-information">
                      <h3>Tiny Dancer - Live Album Version</h3>
                      <p>Ben Folds | Ben Folds Live</p>
                    </div>
                    <a class="Track-action">+</a>
                  </div>
                </div>
              </div>
              <div class="Playlist">
                <input value='New Playlist' />
                <div class="TrackList">
                  <div class="Track">
                    <div class="Track-information">
                      <h3>Stronger</h3>
                      <p>Britney Spears | Oops!... I Did It Again</p>
                    </div>
                    <a class="Track-action">-</a>
                  </div>
                  <div class="Track">
                    <div class="Track-information">
                      <h3>So Emotional</h3>
                      <p>Whitney Houston | Whitney</p>
                    </div>
                    <a class="Track-action">-</a>
                  </div>
                  <div class="Track">
                    <div class="Track-information">
                      <h3>It's Not Right But It's Okay</h3>
                      <p>Whitney Houston | My Love Is Your Love</p>
                    </div>
                    <a class="Track-action">-</a>
                  </div>
                </div>
                <a class="Playlist-save">SAVE TO SPOTIFY</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;