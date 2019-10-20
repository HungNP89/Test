import styled from 'styled-components';

export const Searchstyled = styled.nav`
  display:flex;
  position : relative;
  align-items:center;
  top:-100px;
  right:-100px;
  justify-content:center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  padding:2rem;
  height:2rem;
  border-radius:10rem;
`;

export const Input = styled.nav`
  font-size:14px;
  line-height:1;
  background-color:transparent;
  width:100%;
  border:none;
  color:white;

  &:focus,
  &:active {
      outline:none;
  }
  &::placeholder {
      color:white;
  }
`