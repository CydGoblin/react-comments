import {FC, useReducer} from "react";
import styles from "./CommentVotes.module.css"
import IconMinus from "../../assets/icons/icon-minus";
import IconPlus from "../../assets/icons/icon-plus";

const votesReducer = (state: {votes: number}, action: {type: 'INCREASE' | 'DECREASE'}) => {
  switch (action.type) {
    case 'INCREASE':
      return { votes: state.votes + 1};
    case 'DECREASE':
      return { votes: state.votes - 1};
    default:
      throw new Error('Unknown score action');
  }
}

export const CommentVotes: FC<{score: number}> = ({score}) => {
  const [votes, dispatchVotes] = useReducer(votesReducer, {votes: score})

  return (
    <div className={styles.vote_container}>
      <button className={styles.vote_btn} onClick={() => dispatchVotes({type: 'INCREASE'})}><IconPlus /></button>
      <div className={styles.vote_counter}>{votes.votes}</div>
      <button className={styles.vote_btn} onClick={() => dispatchVotes({type: 'DECREASE'})}><IconMinus /></button>
    </div>
  );
};

export default CommentVotes