import styled from 'styled-components';
export const ButtonItem = styled.button`
  padding: 5px 10px;
  background-color: rgba(245, 126, 225, 0.637);
  color: rgb(77, 77, 77);
  border-radius: 10%;
  border: 2px solid rgba(255, 143, 236, 0.637);

  &:hover {
    background-color: rgba(247, 101, 222, 0.637);
    color: white;
  }
  &:focus {
    background-color: rgba(247, 101, 222, 0.637);
    color: white;
  }
`;
