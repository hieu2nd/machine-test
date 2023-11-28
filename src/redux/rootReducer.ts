import {combineReducers} from 'redux';
// import  from './slices';
import listSlice from './slices/listSlice';

const rootReducer = combineReducers({
  listSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
