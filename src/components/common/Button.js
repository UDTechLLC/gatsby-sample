import styled from "styled-components"

export const Button = styled.button`
  padding: 0 15px;
  line-height: 30px;
  color: #fff;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;

  /* Color the border and text with theme.main */
  background-color: ${props => props.theme.brandSuccess};
`;