import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Datum } from '../../types/musicTypes';

interface MusicState {
  currentSong: Datum | null;
  likedSongs: Record<string, boolean>; // Chiave: ID della canzone, val: stato del "Mi piace"
}

const initialState: MusicState = {
  currentSong: null,
  likedSongs: {},
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    // Imposta la canzone corrente
    setCurrentSong: (state, action: PayloadAction<Datum | null>) => {
      state.currentSong = action.payload;
    },
    // Alterna lo stato del "mi piace" per una canzone cliccando su 'bi-heart-fill' del MusicPlayer
    toggleLikeSong: (state, action: PayloadAction<number>) => {
      const songId = action.payload;
      state.likedSongs[songId] = !state.likedSongs[songId];
    },
  },
});

export const { setCurrentSong, toggleLikeSong } = musicSlice.actions;
export default musicSlice.reducer;
