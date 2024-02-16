import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../features/music/musicSlice';
import AlbumCard from './AlbumCard';
import { Datum } from '../types/musicTypes';

const MainPage = () => {
  const dispatch = useDispatch();
  const [kissSongs, setKissSongs] = useState<Datum[]>([]);
  const [slipknotSongs, setSlipknotSongs] = useState<Datum[]>([]);
  const [billieEilishSongs, setBillieEilishSongs] = useState<Datum[]>([]);

  useEffect(() => {
    const fetchSongs = async (artist: string, setSongs: React.Dispatch<React.SetStateAction<Datum[]>>) => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
        if (response.ok) {
          const data = await response.json();
          setSongs(data.data.slice(0, 6)); // Prendo i primi 6 risultati
        }
      } catch (error) {
        console.error("Error fetching songs for", artist, ":", error);
      }
    };

    fetchSongs('kiss', setKissSongs);
    fetchSongs('slipknot', setSlipknotSongs);
    fetchSongs('billie eilish', setBillieEilishSongs);
  }, []);

  const handleSongSelect = (song: Datum) => {
    dispatch(setCurrentSong(song));
  };

  return (
    <div className="mainPage container mt-3">
      <h2 className="text-start mb-4 ms-4">80's Rock</h2>
      <div className="row">
        {kissSongs.map(song => (
          <div key={song.id} className="col-sm-4 col-md-2">
            <AlbumCard song={song} onSelect={handleSongSelect} />
          </div>
        ))}
      </div>
      <h2 className="text-start mb-4 ms-4">Heavy Metal from the 00's</h2>
      <div className="row">
        {slipknotSongs.map(song => (
          <div key={song.id} className="col-sm-4 col-md-2">
            <AlbumCard song={song} onSelect={handleSongSelect} />
          </div>
        ))}
      </div>
      <h2 className="text-start mb-4 ms-4">New Classics</h2>
      <div className="row">
        {billieEilishSongs.map(song => (
          <div key={song.id} className="col-sm-4 col-md-2">
            <AlbumCard song={song} onSelect={handleSongSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;

