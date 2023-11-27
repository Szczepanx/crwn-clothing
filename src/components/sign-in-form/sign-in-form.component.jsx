import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithdEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

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
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
