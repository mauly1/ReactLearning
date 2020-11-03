import Axios from "axios";

const KEY = 'AIzaSyAI-iNGfewuh0eQ-PSGmAr9jMjrbNFBWBc';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: {KEY}
    }
});
