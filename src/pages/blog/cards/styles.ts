import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 1rem;
  box-shadow: 0px 10px 11px 5px rgba(0, 0, 0, 0.44);
  padding: 20px;
`;

export const StyledCardInfo = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const StyledCardIconContainer = styled.div`
  height: 210px;
  display: flex;
  align-items: flex-start;
`;
