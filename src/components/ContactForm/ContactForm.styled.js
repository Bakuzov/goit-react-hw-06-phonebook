import styled from 'styled-components';
export const Input = styled.input`
  border: 1px solid #cccccc; //цвет рамки
  border-radius: 5px; //закругление углов (общее)
  -webkit-border-radius: 5px; //закругление углов (Google Chrome)
  -moz-border-radius: 3px; //закругление углов (FireFox)
  -khtml-border-radius: 3px; //закругление углов (Safari)
  background: #f9ffff !important; // желательно прописывать, так как в Chrome при сохранных данных оно может быть желтым
  outline: none; // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
  height: 28px; // высота на свое усмотрение
  width: 280px; // ширина на свое усмотрение
  color: #000000; //цвет шрифта в обычном состоянии
  font-size: 14px; // Размер шрифта
  font-family: Tahoma; // Стиль шрифта
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  margin-left: 0px;
  display: block;
  /* margin-left: auto;
  margin-right: auto; */

  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  background-color: grey;
  transition-property: background-color;
  transition-timing-function: linear;
  transition-duration: 100ms;
  transform-origin: left;
  &:hover {
    background-color: darkgrey;
  }
`;
export const P = styled.p`
  display: block;
  font-size: 18px;
  color: #000;

  margin: 0;
`;
