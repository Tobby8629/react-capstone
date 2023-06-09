import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const res = await fetch('https://financialmodelingprep.com/api/v4/revenue-geographic-segmentation?symbol=AAPL&structure=flat&apikey=0caeeed11727db7274daafdf0664e6ee');
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
export const { Filtersearch } = data.actions;
