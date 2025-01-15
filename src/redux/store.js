import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campersSlice";
import filtersReducer from "./filtersSlice";
import favoritesReducer from "./favoritesSlice";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
});

export const persistor = persistStore(store);
