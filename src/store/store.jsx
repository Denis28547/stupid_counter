import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer/counterReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,

    // devTools: process.env.NODE_ENV !== "production",
  },
});

export const persistor = persistStore(store);
