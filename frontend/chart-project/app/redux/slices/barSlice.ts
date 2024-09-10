import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BarChartData from '@/data/barChartData';

interface BarState {
  data: BarChartData;
}

const initialState: BarState = {
  data: { labels: [], data: [] },
};

const barSlice = createSlice({
  name: 'bar',
  initialState,
  reducers: {
    setBarData(state, action: PayloadAction<BarChartData>) {
      state.data = action.payload;
    },
  },
});

export const { setBarData } = barSlice.actions;
export default barSlice.reducer;