import {FC} from "react";
import styles from "./CommentActions.module.css"
import IconReply from "../../assets/icons/icon-reply";
import IconDelete from "../../assets/icons/icon-delete";
import IconEdit from "../../assets/icons/icon-edit";

export const CommentActions: FC<{isOnFooter?: boolean}> = ({isOnFooter = false}) => {
  return (
    <div className={`${styles.comment_actions} ${isOnFooter ? styles.footer : styles.header}`}>
      <button className={`${styles.reply} ${styles.btn}`}><IconReply /> Reply</button>
      <button className={`${styles.delete} ${styles.btn}`}><IconDelete /> Delete</button>
      <button className={`${styles.edit} ${styles.btn}`}><IconEdit /> Edit</button>
    </div>
  );
};

export default CommentActions