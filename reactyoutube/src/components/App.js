import React from "react";
import SearchBar from "./SearchBar";
import '../CSS/App.css'
import Youtube from '../API/Youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('sushmita sen');
    }

    onTermSubmit = async (term) => {
        console.log('term --------> ', term);
        const response = await Youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: '5',
                key: 'AIzaSyAI-iNGfewuh0eQ-PSGmAr9jMjrbNFBWBc'
            }
        });
        this.setState(
            {videos: response.data.items,
                selectedVideo:response.data.items[0]
        })
    };
    onVideoSelect = video => {
        console.log('coming from App !', video);
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="ui container">
                <div className="app-top ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
