import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// import SideBar from './components/sidebar';
// import PageContent from './components/page_content';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDPjqiFBZJpm4LGDzWJxV08O1T5mBjqt6Q';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // this.setState({ videos: videos });
        });
    }

    render() {
        return (
          <div className="row">
              {/* <SideBar />
              <PageContent /> */}
            <SearchBar />
            <VideoList videos={this.state.videos} />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
