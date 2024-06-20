import { UserFavoriteInterface } from '@Types/User';
import { PostInterface } from '@/Types';

export interface PostsSliceState {
    posts: PostInterface[];
    isLoading: boolean;
}

export interface UserSliceState {
    favorite: UserFavoriteInterface[];
}

export interface RootState {
    posts: PostsSliceState;
    user: UserSliceState;
}
