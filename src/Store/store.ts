// src/store/index.ts
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import postsReducer from '@Store/Posts/PostsReducer';
import userReducer from '@Store/User/UserReducer';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
