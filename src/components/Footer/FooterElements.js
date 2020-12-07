import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: white;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 0.75rem;
    width: 100%;
  }
`;

export const FooterLinksTitle = styled.h1`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    color: #01bf72;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 2.5rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialMediaLogo = styled(Link)`
  color: white;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: white;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 1.5rem;
`;
