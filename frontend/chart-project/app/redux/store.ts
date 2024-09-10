import { configureStore } from '@reduxjs/toolkit';
import candlestickReducer from './slices/candleSlice';
import lineReducer from './slices/lineSlice';
import barReducer from './slices/barSlice';
import pieReducer from './slices/pieSlice';

export const store = configureStore({
  reducer: {
    candlestick: candlestickReducer,
    line: lineReducer,
    bar: barReducer,
    pie: pieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
