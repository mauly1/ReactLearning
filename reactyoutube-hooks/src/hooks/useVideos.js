import {useEffect, useState} from "react";
import Youtube from "../API/Youtube";

const UseVidos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        console.log('term --------> ', term);
        const response = await Youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: '5',
                key: 'AIzaSyAI-iNGfewuh0eQ-PSGmAr9jMjrbNFBWBc'
            }
        });
        setVideos(response.data.items);
    };
    return[videos,search];
  //  return{videos,onTermSubmit};
};
export default UseVidos;
