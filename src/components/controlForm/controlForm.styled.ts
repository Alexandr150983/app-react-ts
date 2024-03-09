import styled from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  margin: 50px auto 0;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
