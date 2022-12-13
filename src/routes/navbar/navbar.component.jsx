import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { LogoContainer, NavigationContainer, NavLinkContainer, NavLink } from "./navbar.styles";

const Navigation = () => {
  const { currentUser, setCurentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurentUser(null);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          <NavLink className="nav-link" to="/sign-up">
            SIGNUP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className="nav-link" onClick={signOutHandler} to="/">
              SIGNOUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/sign-in">
              SIGNIN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
