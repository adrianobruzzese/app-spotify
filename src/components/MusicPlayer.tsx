import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const MusicPlayer = () => {
  const currentSong = useSelector((state: RootState) => state.music.currentSong);

  return (
    <div className="music-player">
      <div className="song-bar">
        <div className="song-infos">
          <div className="image-container">
            {/* Aggiorna il percorso dell'immagine di esempio o usa currentSong.album.cover */}
            <img src={currentSong ? currentSong.album.cover : "path/to/your/default/image.jpg"} alt="" />
          </div>
          <div className="song-description">
            {/* Usa i dati di currentSong per visualizzare titolo e artista */}
            <p className="title">{currentSong ? currentSong.title : "Titolo della canzone"}</p>
            <p className="artist">{currentSong ? currentSong.artist.name : "Nome dell'artista"}</p>
          </div>
        </div>
        <div className="icons">
          <i className="bi bi-heart greenable"></i>
          <i className="bi bi-fullscreen-exit"></i>
        </div>
      </div>
      <div className="progress-controller">
        <div className="control-buttons">
          <i className="bi bi-shuffle greenable"></i>
          <i className="bi bi-skip-backward-fill"></i>
          {/* Aggiungi gestione degli eventi onClick per controlli di riproduzione se necessario */}
          <i className="bi bi-play-circle-fill" id="play"></i>
          <i className="bi bi-skip-forward-fill"></i>
          <i className="bi bi-repeat greenable"></i>
        </div>
        <div className="progress-container">
          <span id="currentTime">0:00</span>
          <div className="progress-bar" id="progressBar">
            <div className="progress" id="progress"></div>
          </div>
          <span id="totalTime">0:00</span>
        </div>
      </div>
      <div className="other-features">
        <i className="bi bi-list-ul greenable"></i>
        <i className="bi bi-display greenable"></i>
        <div className="volume-bar">
          <i className="fas fa-volume-down"></i>
          <div className="progress-bar" id="volume-bar">
            <div className="progress" id="volumeProgress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;