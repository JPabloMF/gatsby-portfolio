import styled from "styled-components";

import projectsShape from "../../images/shapes/projectsShape.png";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${projectsShape});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;
