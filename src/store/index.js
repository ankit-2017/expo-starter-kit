import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers, ThunkAction } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

// Slices
import welcomeSlice from './slices/welcomeSlice';
import homeSlice from "./slices/homeSlice";

const persistConfig = {
  	key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'welcome',
        'home',
    ],

};

const reducers = combineReducers({
    welcome: welcomeSlice,
    home: homeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export const persistor = persistStore(store);
export const AppDispatch = typeof store.dispatch;
export const AppThunk = ThunkAction;

export default { persistor, store };