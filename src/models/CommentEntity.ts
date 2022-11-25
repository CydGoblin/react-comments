type CommentEntity = {
    id: string;
    content: string;
    createdAt: number;
    score: number;
    user: {
        avatar: string;
        username: string;
    };
    replies?: CommentEntity[];
};

export default CommentEntity