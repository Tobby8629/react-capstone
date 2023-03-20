import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const res = await fetch('https://financialmodelingprep.com/api/v4/revenue-geographic-segmentation?symbol=AAPL&structure=flat&apikey=fb7924cc979f4c2d8069eddb991685b9');
  const data = res.json();
  return data;
});

const initialState = {
  info: [],
};

const data = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchData.fulfilled, (state, action) => {
      const dat = action.payload;
      const data = dat.map((dat, val) => {
        const sdata = Object.entries(dat);
        const total = Object.values(sdata[0][1]).reduce((acc, val) => acc + val, 0);
        const obj = {
          date: sdata[0][0],
          ...sdata[0][1],
          total,
          id: val,
        };
        return obj;
      });
      return {
        info: data,
      };
    });
  },
});

export default data.reducer;
