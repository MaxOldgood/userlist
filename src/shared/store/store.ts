import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../../entities/user/model/userSlice.js";
import { apiSlice } from "../api/apiSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
