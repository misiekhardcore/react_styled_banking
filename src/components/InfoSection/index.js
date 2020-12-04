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
      <InfoContainer lightBg={props.lightBg} id={props.id}>
        <InfoWrapper imageStart={props.imageStart}>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Headline lightText={props.lightText}>
                  {props.headline}
                </Headline>
                <Subtitle darkText={props.darkText}>
                  {props.description}
                </Subtitle>
                <InfoBtn>
                  <Button
                    smooth={"true"}
                    duration={300}
                    spy={true}
                    exact={"true"}
                    offset={-80}
                    to="home"
                    primary={props.primary ? 1 : 0}
                    dark={props.dark ? 1 : 0}
                  >
                    {props.buttonLabel}
                  </Button>
                </InfoBtn>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img.default} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
