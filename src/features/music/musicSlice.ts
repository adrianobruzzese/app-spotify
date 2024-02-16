import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Datum } from '../../types/musicTypes';

interface MusicState {
  currentSong: Datum | null;
}

const initialState: MusicState = {
  currentSong: null,
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<Datum | null>) => {
      state.currentSong = action.payload;
    },
  },
});

export const { setCurrentSong } = musicSlice.actions;

export default musicSlice.reducer;
