import React from "react";

const Music = ({ cover, title, artist }) => {
  return (
    <div className="music">
      {cover && <img src={cover} alt="album-cover" className="album-cover" />}
      <div className="song-info">
        {title && <span className="name">{title}</span>}
        {artist && <span className="artist">{artist}</span>}
      </div>
    </div>
  );
};

export default Music;
