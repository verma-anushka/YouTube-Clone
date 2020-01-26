import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state= { 
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onQuerySubmit('cat');
    }

    onQuerySubmit = async (query) => {
        // console.log(query);
        const response = await youtube.get('/search',{
            params: {
                q: query
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        })
        console.log(response);
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onQuerySubmit={this.onQuerySubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;