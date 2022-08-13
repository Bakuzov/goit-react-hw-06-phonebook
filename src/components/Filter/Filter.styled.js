import styled from 'styled-components';
export const PFilter = styled.p`
  font-size: 18px;
  color: #050;
  font-variant: small-caps;
`;
export const Input = styled.input`
  border: 1px solid #cccccc; //цвет рамки
  border-radius: 5px; //закругление углов (общее)
  -webkit-border-radius: 5px; //закругление углов (Google Chrome)
  -moz-border-radius: 3px; //закругление углов (FireFox)
  -khtml-border-radius: 3px; //закругление углов (Safari)
  background: #f9ffff !important; // желательно прописывать, так как в Chrome при сохранных данных оно может быть желтым
  outline: none; // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
  height: 24px; // высота на свое усмотрение
  width: 280px; // ширина на свое усмотрение
  color: #000000; //цвет шрифта в обычном состоянии
  font-size: 14px; // Размер шрифта
  font-family: Tahoma; // Стиль шрифта
  margin-right: 10px;
`;
