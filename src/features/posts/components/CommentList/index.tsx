import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../services/postApi.ts";
import { useGetUsersQuery } from "../../../auth/services/authApi.ts";
import { useGetCommentsByPostIdQuery } from "../../services/commentsApi.ts";
import { Comments as CommentType } from "../../types";

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
