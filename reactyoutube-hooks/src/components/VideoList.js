import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {

    const renderList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
    });

    return (
        <div className="ui relaxed devided list">
            Videos {renderList}
        </div>
    );
}
export default VideoList;
