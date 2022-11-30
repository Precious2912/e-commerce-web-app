import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";

const initialFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initialFormState);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(initialFormState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      alert("password length should be greater than 6");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      alert(error.code);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Signup with your email and password</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            name: "displayName",
            value: displayName,
            onChange: handleChange,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            name: "email",
            value: email,
            onChange: handleChange,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            name: "password",
            value: password,
            onChange: handleChange,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "confirmPassword",
            required: true,
            name: "confirmPassword",
            value: confirmPassword,
            onChange: handleChange,
          }}
        />

        <button type="submit">Sign Up</button>
        <p>
          Already registered? <Link to="/sign-in">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
