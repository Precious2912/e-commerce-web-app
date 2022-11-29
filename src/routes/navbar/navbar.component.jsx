import { Outlet, Link } from "react-router-dom";
import './navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Navigation = () => {
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
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
