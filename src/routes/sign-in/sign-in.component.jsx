import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  loginWithGoogleRedirect,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../../components/button/button.component";
import { UserContext } from "../../contexts/user.context";
import "./sign-in.styles.scss";

const initialFormState = {
  email: "",
  password: "",
};

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocFromAuth(response.user);
      }
    };
    fetchData();
  }, []);

  const signInWithGoogle = async () => {
    const { user } = await loginWithGoogleRedirect();
    setCurentUser(user)
    await createUserDocFromAuth(user);
  };

  const [formFields, setFormFields] = useState(initialFormState);
  const { email, password } = formFields;

  const { setCurentUser } = useContext(UserContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initialFormState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      setCurentUser(response)
      resetForm();
    } catch (error) {
      if(error.code === 'auth/wrong-password'){
        alert('incorrect password')
      } else if (error.code === 'auth/user-not-found'){
        alert('account not found, please signup')
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign in with email and password</h2>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
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
        <p>
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
        <div className="button-wrapper">
          <Button type="submit">Sign In </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>
            Signin With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
