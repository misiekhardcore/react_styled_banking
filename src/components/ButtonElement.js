import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: 4rem;
  background: ${({ primary }) => (primary ? "#01bf72" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1rem 3rem" : "0.8rem 2rem")};
  color: ${({ dark }) => (dark ? "#010606" : "white")};
  font-size: ${({ fontBig }) => (fontBig ? "1.5rem" : "1rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "white" : "#01bf72")};
  }
`;
