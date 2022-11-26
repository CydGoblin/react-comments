import {FC} from "react";
import CommentEntity from "../../../models/CommentEntity";
import styles from "./CommentHeader.module.css"
import { formatRelative } from 'date-fns'
import CommentActions from "./CommentActions";

export const CommentHeader: FC<{comment: CommentEntity}> = ({comment}) => {
  return (
    <div className={styles.comment_header}>
      <img className={styles.comment_avatar} src={comment.user.avatar} alt={`${comment.user.username}'s avatar`}/>
      <div className={styles.comment_username}>{comment.user.username}</div>
      <span className={styles.comment_tag}>you</span>
      <div className={styles.comment_time}>{formatRelative(new Date(), comment.createdAt)}</div>
      <div className={styles.comment_actions}>
        <CommentActions />
      </div>
    </div>
  );
};

export default CommentHeader