import React from "react";
import {StyledImg} from "./Image.styled";
import CardImg from "../images/cardImg.jpeg";
import styled from "styled-components";
import {StyledCardHeadline} from "./CardHeadline.styled";
import {TextParagraphStyled} from "./TextParagraph.styled";
import {StyledBtn} from "./Btn.styled";

type CardPropsType = {
    headline: string
}


export default function Card(props: CardPropsType) {
    return (<div>
        <StyledCardBox>
            <StyledImg src={CardImg}/>
            <StyledCardTextBox>
                <StyledCardHeadline>{props.headline}</StyledCardHeadline>
                <TextParagraphStyled>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </TextParagraphStyled>
                <StyledBtnFlexBox>
                    <StyledBtn  as="a" href={"#"} btnType={"primary"}>See more</StyledBtn>
                    <StyledBtn btnType={"outlined"}>Save</StyledBtn>
                </StyledBtnFlexBox>
            </StyledCardTextBox>
        </StyledCardBox>

    </div>)
}

const StyledCardBox = styled.div`
  padding: 10px 10px 22px;
  display: flex;
  flex-direction: column;
  width:100%;
  max-width: 300px;
  min-height: 350px;
  background-color: #fff;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
  border-radius: 15px;
  margin: 100px auto;
`

const StyledCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`

const StyledBtnFlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`

