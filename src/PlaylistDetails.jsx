import React from "react";
import { useLocation } from 'react-router-dom';
import Homebox from './Homebox';
import Playlist from './Playlistbox';
import Verticalline from './Verticalline';

function PlaylistDetails() {
  const location = useLocation();
  console.log("Received Playlist Details:", location.state);
  const { playlistName, photoUrl, playlistSongs } = location.state || {};

  if (!playlistName) {
    return <div>Playlist not found</div>;
  }

  // Use a default image URL if photoUrl is not provided
  const defaultPhotoUrl = "data:image/jpeg;base64,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";
  const imageUrl = photoUrl || defaultPhotoUrl;

  return (
    <div className="overall">
    <div className="playlistdetails">
      <div className="playlist-header">
      <h2>Public Playlist</h2>
      <h1 className="playlist-name">#{playlistName}</h1>
      <img className="playlist-cover" src={imageUrl} alt="Playlist Cover" />
      </div>
      <br />
      <h1 className="songlist-title">Playlist Songs</h1>
      <div className="songslist">
        <ol>
          {playlistSongs.map((song, index) => (
            <li key={index}>
              <div className="playlist-details-list">
                <span className="playlist-details-songs">{`${index + 1}.`}</span>
                <img src={song.image} alt={`Album Cover for ${song.name}`} style={{ width: '70px', height: '70px', marginRight: '10px' }} />
                <span className="playlist-details-songs">{`${song.name}`}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
    <div className='Container'>
      <Homebox />
      <Verticalline />
      <Playlist />
      <Verticalline />
    </div>
  </div>
  
  );
}

export default PlaylistDetails;


