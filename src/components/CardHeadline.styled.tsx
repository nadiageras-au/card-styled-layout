import styled from "styled-components";

type StyledCardHeadlinePropsType = {
    headline?: string

}
export const StyledCardHeadline = styled.h3<StyledCardHeadlinePropsType>`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
  margin-bottom: 20px;
`