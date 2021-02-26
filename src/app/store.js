import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appReducer from '../features/appSlice';
import userReducer from '../features/userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
