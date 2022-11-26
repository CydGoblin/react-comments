import {FC} from "react";
import CommentEntity from "../../../models/CommentEntity";
import styles from "./Comment.module.css"
import CommentHeader from "./CommentHeader";
import CommentActions from "./CommentActions";
import {CommentVotes} from "./CommentVotes";

const Comment: FC<{ comment: CommentEntity }> = ({comment}) => {
  return (
    <div>
      <div className={styles.comment_container}>
        <div className={styles.comment_content}>
          <CommentHeader comment={comment} />
          <div>{comment.content}</div>
        </div>
        <div className={styles.comment_actions}>
          <CommentVotes />
          <div>
            <CommentActions />
          </div>
        </div>
      </div>
      <div className={styles.comment_replies}>
        {comment.replies && comment.replies.map(reply => <Comment key={reply.id} comment={reply} />)}
      </div>
    </div>
  )
}

export default Comment