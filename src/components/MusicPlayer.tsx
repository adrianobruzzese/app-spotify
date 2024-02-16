import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const MusicPlayer = () => {
  const currentSong = useSelector((state: RootState) => state.music.currentSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              {currentSong && (
                <div>
                  <p>Playing: {currentSong.title} by {currentSong.artist.name}</p>
                  <audio controls src={currentSong.preview} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
