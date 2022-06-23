import React from "react";

import {
  StyledContainer,
  StyledCardsContainer,
  StyledLinkContainer,
} from "./styles";
import { SubTitle, Text } from "../../components/texts";
import Link from "../../components/link";
import Card from "./cards";
import { MAP_BLOG_POSTS } from "../../constants";

function Blog({ innerRef }: { innerRef: any }) {
  return (
    <StyledContainer id="blogposts" ref={innerRef}>
      <SubTitle isGreen text="Blog Posts" />
      <StyledCardsContainer>
        {MAP_BLOG_POSTS.map((post, index) => (
          <Card key={index} {...post} index={index} />
        ))}
      </StyledCardsContainer>
      <StyledLinkContainer>
        <Link
          href="https://mfblog.netlify.app/"
          isGreen={false}
          width="190px"
          height="50px"
        >
          <Text text="Read all posts" size="18px" />
        </Link>
      </StyledLinkContainer>
    </StyledContainer>
  );
}

export default Blog;
