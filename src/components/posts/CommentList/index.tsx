import React from "react";

import { Comments as CommentType } from "../../../types/types.ts";

import {
  Wrapper,
  CommentContainer,
  CommentAuthor,
  CommentEmail,
  CommentBody,
} from "./CommentList.styled.tsx";

interface CommentListProps {
  comments: CommentType[];
}
const CommentList = ({ comments }: CommentListProps) => {
  return (
    <Wrapper>
      <h3>{comments.length} Comments</h3>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentAuthor>{comment.name}</CommentAuthor>
          <CommentEmail>{comment.email}</CommentEmail>
          <CommentBody>{comment.body}</CommentBody>
        </CommentContainer>
      ))}
    </Wrapper>
  );
};

export default CommentList;
