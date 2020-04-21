import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
  const renderSelectedSong = () => {
    if (!mySelectedSong) {
      return 'No song select';
    }
    return (
      <>
        <h3>Title: {mySelectedSong.title}</h3>
        <p>Duration: {mySelectedSong.duration}</p>
      </>
    );
  };

  return (
    <div>
      <h1>SongDetail</h1>
      {renderSelectedSong()}
    </div>
  );
};

const mapStateToProps = state => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
