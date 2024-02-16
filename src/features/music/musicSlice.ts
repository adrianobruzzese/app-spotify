import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Datum } from '../../types/musicTypes';

interface MusicState {
  currentSong: Datum | null;
  likedSongs: Record<string, boolean>;
}

const initialState: MusicState = {
  currentSong: null,
  likedSongs: {},
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<Datum>) => {
      state.currentSong = action.payload;
    },
    toggleLikeSong: (state, action: PayloadAction<string>) => {
      const songId = action.payload;
      state.likedSongs[songId] = !state.likedSongs[songId];
    },
  },
});

export const { setCurrentSong, toggleLikeSong } = musicSlice.actions;

export default musicSlice.reducer;
