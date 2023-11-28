import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import {ICityStates} from '../types';
import {LogApp} from '@utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MOCK_DATA} from '../../../mock';

const initialState = {
  cities: [],
  isError: false,
  isLoading: true,
} as ICityStates;
export const getCities = createAsyncThunk('list/cities', async () => {
  const response = await AsyncStorage.getItem('mock_data');
  if (response) return JSON.parse(response);
  else {
    await AsyncStorage.setItem('mock_data', JSON.stringify(MOCK_DATA));
    return MOCK_DATA;
  }
});
const accountSlice = createSlice({
  name: APP_SLICE.LIST_SLICE,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCities.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCities.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.cities = payload;
      })
      .addCase(getCities.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = accountSlice.actions;
export default accountSlice.reducer;
