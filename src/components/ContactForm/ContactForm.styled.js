import styled from 'styled-components';
export const FieldSet = styled.fieldset`
  width: 500px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  background-color: rgb(226, 226, 238);
`;
export const ContactButton = styled.button`
  display: block;
  width: 150px;
  margin: 0 auto;
  padding: 10px 15px;
  background-color: rgb(201, 201, 248);
  color: rgb(77, 77, 77);
  border-radius: 10%;
  border: 4px solid rgb(206, 206, 248);

  &:hover {
    background-color: rgb(205, 205, 248);
    color: white;
  }
  &:focus {
    background-color: rgb(205, 205, 248);
    color: white;
  }
`;
