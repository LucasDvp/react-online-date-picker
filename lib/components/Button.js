import styled from 'styled-components';
import {darken} from "polished";

const Button = styled.button`
  background: ${props => props.bgColor};
  border: none;
  border-radius: 2px;
  color: ${props => props.fontColor};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${props => darken(0.1, props.bgColor)};
  }
`;

Button.defaultProps = {
  bgColor: 'purple',
  fontColor: 'white',
};
export default Button;
