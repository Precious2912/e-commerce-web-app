import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
//   loginWithGooglePopup,
  loginWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  useEffect(() => {
    const fetchData = async() => {
      const response = await getRedirectResult(auth);
      if(response){
          await createUserDocFromAuth(response.user);
      }
    }
    fetchData();
  }, []); 

//   const logGoogleUser = async () => {
//     const { user } = await loginWithGooglePopup();
//     const userDocRef = await createUserDocFromAuth(user);
//   };

  return (
    <>
      <div>Login</div>
      {/* <button onClick={logGoogleUser}>Login with Google Popup</button> */}
      <button onClick={loginWithGoogleRedirect}>
        Login with Google Redirect
      </button>
    </>
  );
};

export default SignIn;
