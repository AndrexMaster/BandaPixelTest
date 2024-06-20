import { Params } from '@Types/Common';
import { PostComments } from '@Components/Post';
import { PostContent } from '@Components/Post';
import axios, { AxiosResponse } from 'axios';
import { PostInterface } from '@/Types';

const getPost = async (postId: number | string) => {
    const res: AxiosResponse<PostInterface> = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    return res.data;
};

export const generateMetadata = async (props: Params) => {
    const { postId } = props.params;
    const post = await getPost(postId);

    return {
        title: post.title,
        description: post.body,
    };
};

const PostPage = async (props: Params) => {
    const { postId } = props.params;
    const post = await getPost(postId);

    return (
        <div className={'flex flex-col gap-8 items-start justify-start'}>
            <div>{/*  Maybe some Image?  */}</div>
            <hr className={'h-auto w-full'} />
            <PostContent post={post} />
            <hr className={'h-auto w-full'} />
            <PostComments postId={postId} />
        </div>
    );
};

export default PostPage;
