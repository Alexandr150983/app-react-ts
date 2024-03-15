import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "./ControlForm.styled";

interface FormData {
  username: string;
  email: string;
}

const ControlledForm: React.FC = () => {
  const initialFormData: FormData = {
    username: "",
    email: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };
  const handleClick = () => {};

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <Button type="submit" onClick={handleClick}>
        Send
      </Button>
    </Form>
  );
};
export default ControlledForm;
