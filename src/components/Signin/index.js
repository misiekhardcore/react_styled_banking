import React from "react";
import {
  Container,
  FormWrapper,
  Form,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormH1,
  Text,
  Icon,
} from "./SigninElements";

const Signin = () => {
  return (
    <Container>
      <FormWrapper>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default Signin;
