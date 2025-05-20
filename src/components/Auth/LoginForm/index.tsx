import React from "react";
import {
  Section,
  Wrapper,
  Card,
  Heading,
  Form,
  Label,
  Input,
  SubmitButton,
} from "./LoginForm.styled.tsx";
import GoogleLoginButton from "../GoogleLoginButton/index.tsx";
import JsonUserDropdown from "../JSONUserDropdown/index.tsx";

const LoginForm = () => {
  return (
    <Section>
      <Wrapper>
        <Card>
          <Heading>Sign in to your account</Heading>
          <Form>
            <div>
              <Label htmlFor="email">Your email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>

            <SubmitButton type="submit">Sign in</SubmitButton>
            <GoogleLoginButton />
            <JsonUserDropdown />
          </Form>
        </Card>
      </Wrapper>
    </Section>
  );
};

export default LoginForm;
