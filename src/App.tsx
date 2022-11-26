import React from 'react';
import './App.css';
import useFetch from "./hooks/useFetch";
import CommentEntity from "./models/CommentEntity";
import {CommentsContainer} from "./components/comments/CommentsContainer";

function App() {
  const {loading, data} = useFetch<{ comments: CommentEntity[] }>('/comments');

  const comments = data.comments

  return (
    <div className="container">
      {loading && <div>LOADING{loading}</div>}
      {!loading && <CommentsContainer comments={comments} />}
    </div>
  );
}

export default App;
