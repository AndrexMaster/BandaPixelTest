import axios from 'axios';
import { PostCommentsInterface } from '@/Types';

interface PostCommentsProps {
    postId: number | string;
}

export const PostComments = async (props: PostCommentsProps) => {
    const { postId } = props;
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    const comments = response.data;

    return (
        <div className={'flex flex-col gap-8'}>
            <h2 className={'text-2xl text-gray-700 font-bold'}>Коментарі:</h2>
            <div className={'flex flex-col gap-4'}>
                {comments?.map((comment: PostCommentsInterface) => (
                    <div
                        key={comment.id}
                        className="flex flex-col gap-4 px-4 py-4 bg-white rounded-lg shadow-md w-full border-gray-300 border hover:bg-gray-50"
                    >
                        <div className="">
                            <div className={'flex gap-3 items-center'}>
                                <p className="text-lg text-gray-700 font-bold ">
                                    {comment.name}
                                </p>
                                <i className={'text-xs text-gray-500'}>
                                    ({comment.email})
                                </i>
                            </div>
                            <p className="mt-2 text-gray-600">{comment.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
