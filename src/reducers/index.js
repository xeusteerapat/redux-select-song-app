import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'My Stupid Mouth', duration: '4:06' },
    { title: 'Clarity', duration: '3:56' },
    { title: 'Bold As Love', duration: '5:38' },
    { title: 'Belief', duration: '4:22' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
