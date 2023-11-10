import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";


type StyledBtnPropsType = {
    color?: string
    href?: string
    btnType?: "primary" | "outlined"
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  min-width: 86px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-color: ${myTheme.colors.accent};
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  outline: none;
  

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    //outlined
    background: ${myTheme.colors.secondary};
    border: 2px solid ${myTheme.colors.accent};
    color: ${myTheme.colors.accent};
    transition: background-color .2s linear, color .2s linear;

    &:hover {
      background-color: ${myTheme.colors.accent};
      color: ${myTheme.colors.secondary};
      border: 2px solid ${myTheme.colors.accent};
      outline-width: 0;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    //primary
    background-color: ${myTheme.colors.accent};
    color: ${myTheme.colors.secondary};
    border: 2px solid ${myTheme.colors.accent};

    transition: background-color .2s linear, color .2s linear;

    &:hover {
      background-color: ${myTheme.colors.secondary};
      color: ${myTheme.colors.accent};
      border: 2px solid ${myTheme.colors.accent};
      outline-width: 0;
    }
  `}
`


