import React, {FC} from "react";
import CommentEntity from "../models/CommentEntity";
import styles from  "./Comment.module.css"

const Comment: FC<{comment: CommentEntity }> = (props) => {
  return (
      <div className={styles.comment__container}>
        <div>{props.comment.user.username}</div>
        <div>{props.comment.content}</div>
      </div>
  )
}

export default Comment