import { createSlice } from '@reduxjs/toolkit';
import { getPosts } from '@Store/Posts/Thunks/getPost';
import { PostsSliceState } from '@Types/Redux';

const initialState: PostsSliceState = {
    posts: [],
    isLoading: true,
};

const PostsSlice = createSlice({
    name: 'PostsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.posts = initialState.posts;
            state.isLoading = true;
        });

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        });

        builder.addCase(getPosts.rejected, (state) => {
            state.posts = initialState.posts;
            state.isLoading = false;
        });
    },
});

export const {} = PostsSlice.actions;
export default PostsSlice.reducer;
