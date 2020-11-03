import React from "react";
import "../CSS/VideoItem.css"

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img alt={video.snippet.thumbnails.medium.url} className="ui image"
                 src={video.snippet.thumbnails.medium.url} key={video.id.videoId}/>
            <div className="content">
                <div className="header">    {video.snippet.title} </div>
            </div>

        </div>
    );
};
export default VideoItem;
