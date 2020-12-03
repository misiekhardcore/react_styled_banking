import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Headline,
  Subtitle,
  InfoBtn,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = (props) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Top line</TopLine>
                <Headline>Headline</Headline>
                <Subtitle>Subtitle</Subtitle>
                <InfoBtn>
                  <Button to="home">Button</Button>
                </InfoBtn>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
