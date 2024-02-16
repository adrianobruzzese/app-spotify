import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import '../App.css';

const MusicPlayer = () => {
  const currentSong = useSelector((state: RootState) => state.music.currentSong);
  const audioRef = useRef<HTMLAudioElement>(new Audio()); //possibile soluzione trovata su internet ma non mi convince, approfondirò nel w.e. perché non funziona

  useEffect(() => {
    // Verifica che currentSong esista prima di tentare di assegnare src e avviare la riproduzione?
    if (currentSong && currentSong.preview) {
      // TypeScript ora è sicuro che audioRef.current non sia null grazie all'inizializzazione di useRef? Boh mi fido di stackoverflow e chatgpt, approfondirò
      audioRef.current.src = currentSong.preview;
      audioRef.current.play().catch(error => console.log('Playback was prevented:', error));
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(error => console.error('Playback was prevented:', error));
      } else {
        audioRef.current.pause();
      }
    }
  };

   if (!currentSong) {
    return null; // Non renderizzare il player se non c'è una canzone selezionata
  }

  return (
    <div className="music-player">
      <div className="song-bar">
        <div className="song-infos">
          <div className="image-container">
            {/* Utilizza la copertina dell'album se disponibile */}
            <img src={currentSong.album.cover} alt={currentSong.title} />
          </div>
          <div className="song-description">
            <p className="title">{currentSong.title}</p>
            <p className="artist">{currentSong.artist.name}</p>
          </div>
        </div>
        <div className="icons">
          <i className="bi bi-heart"></i>
          <i className="bi bi-fullscreen-exit"></i>
        </div>
      </div>
      <div className="progress-controller">
        {/* Control Buttons */}
        <div className="control-buttons">
          <i className="bi bi-shuffle"></i>
          <i className="bi bi-skip-backward-fill"></i>
          {/* Mi sarebbe piaciuto modellare questo bottone, ma non ho fatto in tempo */}
               <button onClick={togglePlayPause}>
        {audioRef.current && !audioRef.current.paused ? 'Pause' : 'Play'}
      </button>
          <i className="bi bi-skip-forward-fill"></i>
          <i className="bi bi-repeat"></i>
        </div>
        {/* Placeholder per la barra di progresso e il controllo del volume per mancanza di tempo */}
      </div>

    </div>
  );
};

export default MusicPlayer;
