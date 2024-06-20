import { PostFavorite } from '@Components/Post';
import { PostInterface } from '@/Types';

interface PostContentProps {
    post: PostInterface;
}

export const PostContent = async (props: PostContentProps) => {
    const { post } = props;

    return (
        <div className={'flex flex-col gap-4 items-start justify-start px-4'}>
            <div className={'flex justify-between items-start w-full'}>
                <h1 className={'text-4xl'}>{post?.title}</h1>
                <PostFavorite post={post} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post?.body ?? '' }}></div>
        </div>
    );
};
