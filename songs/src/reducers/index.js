import { combineReducers } from 'redux';

const songsReducer= () =>{
    return [
        {title:'hi',duration:'2:45'},
        {title:'hello',duration:'4:05'},
        {title:'vanakkam',duration:'4:50'},
        {title:'aadab',duration:'4:15'}
    ];
};

const selectedSongReducer= (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};
export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});