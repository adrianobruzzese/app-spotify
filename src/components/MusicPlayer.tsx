import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { toggleLikeSong } from '../features/music/musicSlice'; 
import '../App.css';

const MusicPlayer = () => {
  const currentSong = useSelector((state: RootState) => state.music.currentSong);
  const likedSongs = useSelector((state: RootState) => state.music.likedSongs);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    if (currentSong && currentSong.preview) {
      audioRef.current.src = currentSong.preview;
      audioRef.current.play().catch(error => console.log('Playback was prevented:', error));
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch(error => console.error('Playback was prevented:', error));
    } else {
      audioRef.current.pause();
    }
  };

  const handleLike = () => {
    if (currentSong) {
      dispatch(toggleLikeSong(currentSong.id));
    }
  };

  const isLiked = currentSong && likedSongs[currentSong.id];

  if (!currentSong) {
    return null; // Non renderizzare il player se non c'è una canzone selezionata
  }

  return (
    <div className="music-player">
      <div className="song-bar">
        <div className="song-infos">
          <div className="image-container">
            <img src={currentSong.album.cover} alt={currentSong.title} />
          </div>
          <div className="song-description">
            <p className="title">{currentSong.title}</p>
            <p className="artist">{currentSong.artist.name}</p>
          </div>
        </div>
        <div className="icons">
          <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}`} onClick={handleLike}></i>
          <i className="bi bi-fullscreen-exit"></i>
        </div>
      </div>
      <div className="progress-controller">
        <div className="control-buttons">
          <i className="bi bi-shuffle"></i>
          <i className="bi bi-skip-backward-fill"></i>
          <button onClick={togglePlayPause}>
            {audioRef.current && !audioRef.current.paused ? 'Pause' : 'Play'}
          </button> 
          {/* mi sarebbe piaciuto modellare questo bottone play/pause, ma il tempo mi è stato nemico */}
          <i className="bi bi-skip-forward-fill"></i>
          <i className="bi bi-repeat"></i>
        </div>
        {/* Placeholder per la barra di progresso e il controllo del volume per mancanza di tempo */}
      </div>
    </div>
  );
};

export default MusicPlayer;
