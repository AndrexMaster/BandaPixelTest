export interface PostInterface {
    userId?: number;
    id: number;
    title: string;
    body: string;
}

export interface PostCommentsInterface {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}
