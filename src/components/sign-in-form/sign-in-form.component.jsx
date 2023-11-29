import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.jsx";
import {
  signInWithGooglePopup,
  signInAuthWithdEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { ButtonsContainer, SingInContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const aaa = BUTTON_TYPE_CLASSES;
console.log(aaa);
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithdEmailAndPassword(email, password);

      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials")
        alert("Wrong password or e-mail!");
      console.log(error);
    }
  };

  return (
    <SingInContainer>
      <h2>Alredy have an account?</h2>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          required
          onChange={handleChange}
          type="email"
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          type="password"
          value={password}
          name="password"
        />
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SingInContainer>
  );
};

export default SignInForm;
