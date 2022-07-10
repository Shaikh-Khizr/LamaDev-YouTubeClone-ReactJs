import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme})  => theme.text};
`;

const UserName = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const CommentDate = styled.span`
    font-style: 12px;
    font-weight: 400;
    color: ${({theme})  => theme.textSoft};
    margin-left: 5px;
`;
const CommentText = styled.span`
    font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/yti/APfAmoFGjW5QTHCWRvT9-6zp2um9mtMp14kIK-SBGA2k=s48-c-k-c0x00ffffff-no-rj" />
      <Details>
        <UserName>
          Khizr AA Shaikh <CommentDate>2 months ago</CommentDate>
        </UserName>
        <CommentText>First Thanks for this project sir</CommentText>
      </Details>
    </Container>
  );
};

export default Comment;
