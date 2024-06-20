'use client';

import { useEffect, useMemo, useState } from 'react';
import { getPosts } from '@Store/Posts/Thunks/getPost';
import Pagination from '@Components/Navigation/Pagination';
import {
    addPostToFeatureList,
    removePostFromFeatureList,
} from '@Store/User/UserReducer';
import { RootState } from '@Types/Redux';
import { FavoriteIconButton } from '@Components/Buttons/FavoriteIconButton';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/Store';

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const isPostsLoading = useAppSelector(
        (state: RootState) => state.posts.isLoading
    );

    const posts = useAppSelector((state: RootState) => state.posts.posts);
    const favoriteList = useAppSelector(
        (state: RootState) => state.user.favorite
    );

    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = useMemo(() => {
        if (!posts || posts.length === 0) return [];
        return posts.slice(indexOfFirstPost, indexOfLastPost);
    }, [indexOfFirstPost, indexOfLastPost, posts]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className={'flex flex-col gap-8 h-full flex-1 justify-between'}>
            {!isPostsLoading ? (
                currentPosts.length > 0 ? (
                    <div className={'grid grid-cols-2 gap-2'}>
                        {currentPosts.map((post: any) => {
                            const postInFavoriteList = favoriteList.find(
                                (favoriteItem) =>
                                    favoriteItem?.postId === post.id
                            );

                            return (
                                <div
                                    key={post.id}
                                    className="flex flex-col gap-4 px-4 py-4 bg-white rounded-lg shadow-md w-full border-blue-300 border hover:bg-blue-50"
                                >
                                    <div className="">
                                        <h3 className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                                            {post.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {post.body}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto">
                                        <Link
                                            className="text-blue-600 hover:underline"
                                            href={`/posts/${post.id}`}
                                        >
                                            Read more
                                        </Link>
                                        <FavoriteIconButton
                                            handleClick={() => {
                                                if (!!postInFavoriteList) {
                                                    dispatch(
                                                        removePostFromFeatureList(
                                                            post.id
                                                        )
                                                    );
                                                } else {
                                                    dispatch(
                                                        addPostToFeatureList({
                                                            postId: post.id,
                                                            postTitle:
                                                                post.title,
                                                        })
                                                    );
                                                }
                                            }}
                                            size={24}
                                            isActive={!!postInFavoriteList}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>No posts available</p>
                )
            ) : (
                <div className={'flex justify-center items-center'}>
                    <p>Loading...</p>
                </div>
            )}
            {!isPostsLoading && currentPosts.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default PostsPage;
