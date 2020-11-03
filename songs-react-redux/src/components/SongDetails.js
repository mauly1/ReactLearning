import React from "react";
import {connect} from 'react-redux';

const SongDetail = ({mySelectedSong}) => {

    if (mySelectedSong != null) {
        return (
            <div>
                <h3>Details For : </h3>
               <p>
                   Title: {mySelectedSong.title}
                   <br/>
                   Duration: {mySelectedSong.duration}
               </p>
            </div>
        );
    }
    return (
        <div>
            Please select a song...
        </div>);

}
const mapStateToProps = (state) => {
    return {mySelectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
