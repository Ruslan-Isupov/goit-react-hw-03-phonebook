import styled from 'styled-components';
export const FilterInput = styled.input`
  padding: 5px 10px;
  background-color: rgb(211, 211, 223);

  border-radius: 10%;
  border: 2px solid rgb(211, 211, 223);
  box-shadow: 2px 2px 2px gray;

  &:hover {
    background-color: rgb(204, 204, 224);
  }
  &:focus {
    background-color: rgb(204, 204, 224);
  }
`;
export const FilterContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgb(255, 251, 246);
`;
