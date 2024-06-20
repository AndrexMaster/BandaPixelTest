import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSliceState } from '@Types/Redux';

const initialState: UserSliceState = {
    favorite: [],
};

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        addPostToFeatureList(state, action) {
            state.favorite.unshift(action.payload);
        },
        removePostFromFeatureList(state, action: PayloadAction<number>) {
            state.favorite = state.favorite.filter(
                (item) => item.postId !== action.payload
            );
        },
    },
});

export const { addPostToFeatureList, removePostFromFeatureList } =
    UserSlice.actions;
export default UserSlice.reducer;
