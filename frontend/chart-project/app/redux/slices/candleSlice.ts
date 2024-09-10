import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CandlestickChartData from '@/data/candlestickChartData';

interface CandlestickState {
  data: CandlestickChartData;
}

const initialState: CandlestickState = {
  data: { data: [] },
};

const candlestickSlice = createSlice({
  name: 'candlestick',
  initialState,
  reducers: {
    setCandlestickData(state, action: PayloadAction<CandlestickChartData>) {
      state.data = action.payload;
    },
  },
});

export const { setCandlestickData } = candlestickSlice.actions;
export default candlestickSlice.reducer;