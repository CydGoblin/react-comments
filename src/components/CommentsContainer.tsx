import React, {FC} from "react";
import CommentEntity from "../models/CommentEntity";
import Comment from "./Comment";

export const CommentsContainer: FC<{comments: CommentEntity[]}> = (props) => {
    return (
        <div>
            {props.comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </div>
    );
};