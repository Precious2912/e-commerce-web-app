import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleGoToCheckout = () => navigate('/checkout')
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {/* {cartItems.length === 0 && <h3>No items in cart</h3>} */}
        {cartItems.map((item, index) => (
          <CartItem key={index + 1} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
