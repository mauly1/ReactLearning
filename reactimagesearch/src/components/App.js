import React from "react";

import SearchBar from "./SearchBar";
import "../CSS/app.css"
import Unsplash from "../api/Unsplash"
import ImageList from "./ImageList";

class App extends React.Component {


    /* // fetching response by promise
     onSearchSubmit(term) {
         console.log("Term from App--- ", term);
         Axios.get('https://api.unsplash.com//search/photos',{
             params:{ query: term },
             headers:{
                 Authorization: 'Client-ID STf692Qw2_NqBq6wJGGuyPqF7SnNLZZyGIakhvUbckI'
             }
         }).then(response =>{ console.log(response.data.results)});
     }*/

// fetching response on non promise and easy way
    state = {images: []};
    onSearchSubmit = async term => {
        console.log("Term from App--- ", term);
        const response = await Unsplash.get('/search/photos', {
            params: {query: term}

        });
        this.setState({images: response.data.results});
        console.log(response.data.results);
    };

    render() {
        return (
            <div className=" app-margin ui container">
                <SearchBar onUserDataSubmit={this.onSearchSubmit}/>
                <div>Found: {this.state.images.length}</div>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}


export default App;
