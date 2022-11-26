import {FC} from "react";
import CommentEntity from "../../models/CommentEntity";
import styles from "./Comment.module.css"
import CommentHeader from "./CommentHeader";
import CommentVotes from "./CommentVotes";
import CommentActions from "./CommentActions";

const Comment: FC<{ comment: CommentEntity }> = ({comment}) => {
  return (
    <>
      <div className={styles.comment_container}>
        <div className={styles.comment_content}>
          <CommentHeader comment={comment} />
          <div>{comment.content}</div>
        </div>
        <div className={styles.comment_actions}>
          <CommentVotes score={comment.score} />
          <CommentActions isOnFooter={true} />
        </div>
      </div>
      <div className={styles.comment_replies}>
        {comment.replies && comment.replies.map(reply => <Comment key={reply.id} comment={reply} />)}
      </div>
    </>
  )
}

export default Comment