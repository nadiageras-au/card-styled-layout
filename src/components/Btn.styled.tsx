import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";


type StyledBtnPropsType = {
    color?: string
    btnType?: "primary" | "outlined"
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  display: block;
  min-width: 86px;
  height: 30px;
  margin-right: 15px;
  border: none;
  border-color: ${myTheme.colors.accent};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition: background-size 0.6s linear;
  -o-transition: background-size 0.6s linear;
  -webkit-transition: background-size 0.6s linear;

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    //outlined
    background: #fff;
    border: 2px solid ${props => props.color};
    color: ${myTheme.colors.accent};
    transition: background-color .4s ease-in-out, color .4s ease-in-out;

    &:hover {
      background-color: ${myTheme.colors.accent};
      color: #fff;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    //primary
    background: ${myTheme.colors.accent};
    color: #fff;

    transition: background-color .4s ease-in-out, color .4s ease-in-out;

    &:hover {
      background-color: #fff;
      color: ${myTheme.colors.accent};
      border: 2px solid ${myTheme.colors.accent};
    }
  `}
`

export const StyledBtnLink = styled(StyledBtn)`
text-decoration: none;
`