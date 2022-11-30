import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser, setCurentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurentUser(null);
  };
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-up">
            SIGNUP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutHandler} to="/">
              SIGNOUT
            </Link>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGNIN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
