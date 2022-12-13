import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const cartToggle = () => setIsCartOpen((p) => !p);

  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
