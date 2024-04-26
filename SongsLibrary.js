import React from 'react';

const SongLibrary = ({ songs }) => {
  return (
    <div id="content">
      {songs.map((song, index) => (
        <div className="song-box" style={{ border: `3px` }} key={index}>
          <div className="song-image" style={{ backgroundImage: `url(${song.picture})` }}></div>
          <div className="song-name" style={{ textAlign:`center` }}>{song.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SongLibrary;