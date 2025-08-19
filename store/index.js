import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@/utils/storage";

import rootSaga from "./rootSaga";
import authSlice from "./slices/authSlice";
import postSlice from "./slices/postSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    posts: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
