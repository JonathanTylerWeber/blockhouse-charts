import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PieChartData from '@/data/pieChartData';

interface PieState {
  data: PieChartData;
}

const initialState: PieState = {
  data: { labels: [], data: [] },
};

const pieSlice = createSlice({
  name: 'pie',
  initialState,
  reducers: {
    setPieData(state, action: PayloadAction<PieChartData>) {
      state.data = action.payload;
    },
  },
});

export const { setPieData } = pieSlice.actions;
export default pieSlice.reducer;