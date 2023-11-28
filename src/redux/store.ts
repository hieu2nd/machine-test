import rootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, ThunkAction, Action, AnyAction} from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bottomTabSlice']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type AppDispatch =ThunkDispatch<RootState, any, AnyAction>;;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
