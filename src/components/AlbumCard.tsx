import React from 'react';
import { Datum } from '../types/musicTypes';

interface AlbumCardProps {
  song: Datum;
  onSelect: (song: Datum) => void; // Aggiunta di una prop per la selezione
}

const AlbumCard: React.FC<AlbumCardProps> = ({ song, onSelect }) => {
  return (
    <div className="col text-center album-card" onClick={() => onSelect(song)}>
      <img className="img-fluid" src={song.album.cover} alt="track" />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
