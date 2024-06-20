import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { PostInterface } from '@/Types';

export const getPosts = createAsyncThunk('post/getPosts', async () => {
    try {
        const res: AxiosResponse<PostInterface[]> = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
        );
        return res.data;
    } catch (error) {
        console.error('Failed to fetch super admin topics:', error);
        throw error;
    }
});
