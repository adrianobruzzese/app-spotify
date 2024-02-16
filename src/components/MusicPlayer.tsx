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
      // TypeScript ora è sicuro che audioRef.current non sia null grazie all'inizializzazione di useRef? Verificare
      audioRef.current.src = currentSong.preview;
      audioRef.current.play().catch(error => console.log('Playback was prevented:', error));
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch(error => console.log('Playback was prevented:', error));
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="music-player">
      <button onClick={togglePlayPause}>
        {!audioRef.current.paused ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
