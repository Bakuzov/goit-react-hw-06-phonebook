import styled from 'styled-components';
export const Button = styled.button`
  margin-left: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  padding: 3px 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  background-color: red;
  transition-property: background-color;
  transition-timing-function: linear;
  transition-duration: 100ms;
  transform-origin: left;
  &:hover {
    background-color: darkred;
  }
`;
export const ItemLi = styled.li`
  width: 282px;
  margin-bottom: 5px;
  background: rgba(11, 37, 37, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(105, 50, 200, 0.2);
  overflow: hidden;
`;
export const PFilter = styled.p`
  font-size: 18px;
  color: blue;
  font-variant: small-caps;
  text-align: center;
  margin: 5px 0 5px;
`;
