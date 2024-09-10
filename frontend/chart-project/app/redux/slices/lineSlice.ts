import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import LineChartData from '@/data/lineChartData';

interface LineState {
  data: LineChartData;
}

const initialState: LineState = {
  data: { labels: [], data: [] },
};

const lineSlice = createSlice({
  name: 'line',
  initialState,
  reducers: {
    setLineData(state, action: PayloadAction<LineChartData>) {
      state.data = action.payload;
    },
  },
});

export const { setLineData } = lineSlice.actions;
export default lineSlice.reducer;