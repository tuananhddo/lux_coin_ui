import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  &.fixedSroll {
    .custom {
      backdrop-filter: saturate(1) blur(20px);
      background-color: #ffffff00;
      top: 0;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
export const Content = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
`;
