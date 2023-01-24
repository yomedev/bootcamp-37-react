import { useState } from 'react';

import { CommentForm } from '../../../components/Comments';
import { CommentList } from '../../../components/Comments';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};