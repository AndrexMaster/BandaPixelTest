'use client';

import {
    addPostToFeatureList,
    removePostFromFeatureList,
} from '@Store/User/UserReducer';
import { FavoriteIconButton } from '@Components/Buttons/FavoriteIconButton';
import { RootState } from '@Types/Redux';
import { PostInterface } from '@/Types';
import { useAppDispatch, useAppSelector } from '@/Store';

interface PostFavoriteInterface {
    post: PostInterface;
}

export const PostFavorite = (props: PostFavoriteInterface) => {
    const { post } = props;
    const dispatch = useAppDispatch();
    const favoriteList = useAppSelector(
        (state: RootState) => state.user.favorite
    );
    const postInFavoriteList = favoriteList.find(
        (favoriteItem) => favoriteItem?.postId === post.id
    );

    return (
        <FavoriteIconButton
            isActive={!!postInFavoriteList}
            handleClick={() => {
                if (!!postInFavoriteList) {
                    dispatch(removePostFromFeatureList(post.id));
                } else {
                    dispatch(
                        addPostToFeatureList({
                            postId: post.id,
                            postTitle: post.title,
                        })
                    );
                }
            }}
        />
    );
};
