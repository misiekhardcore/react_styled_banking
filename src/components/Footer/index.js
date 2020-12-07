import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterWrapper,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialMediaLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
              <FooterLink to="/">Submit video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialMediaLogo to="/">dolla</SocialMediaLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()}. All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" aria-label="facebook" target="_blank">
                <FaFacebook></FaFacebook>
              </SocialIconLink>
              <SocialIconLink href="/" aria-label="instagram" target="_blank">
                <FaInstagram></FaInstagram>
              </SocialIconLink>
              <SocialIconLink href="/" aria-label="youtube" target="_blank">
                <FaYoutube></FaYoutube>
              </SocialIconLink>
              <SocialIconLink href="/" aria-label="twitter" target="_blank">
                <FaTwitter></FaTwitter>
              </SocialIconLink>
              <SocialIconLink href="/" aria-label="linkedin" target="_blank">
                <FaLinkedin></FaLinkedin>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
