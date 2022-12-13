import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleGoToCheckout = () => navigate('/checkout');
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 && <EmptyMessage>Your cart is empty</EmptyMessage>}
        {cartItems.map((item, index) => (
          <CartItem key={index + 1} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
