import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

import './App.css';

class App extends React.Component {
  state = {
    videos: [],
  };

  onEnter = term => {
    youtube
      .get('/search', {
        params: {
          q: term,
        },
      })
      .then(response =>
        this.setState({
          videos: response.data.items,
        }),
      );
  };

  render() {
    return (
      <div className="ui-container">
        <div style={{ backgroundColor: 'red', height: '150px' }}>
          <SearchBar whenIPressEnter={this.onEnter} />
        </div>
        <div className="App__Body">
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
