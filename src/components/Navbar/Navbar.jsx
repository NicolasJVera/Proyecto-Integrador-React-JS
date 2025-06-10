import { Link } from "react-router-dom";
import { useState } from 'react';
import { NavbarContainer, LogoContainer, Logo, NavMenu, Overlay } from './NavbarStyles';
import Menu from "./Menu/Menu";
import CartIconComponent from "../Cart/CartIcon/CartIcon";
import Cart from "../Cart/Cart";
import { useCart } from "../Cart/hooks/useCart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    cartItems,
    total,
    count,
    handleUpdateQuantity,
    handleClearCart,
    handleBuy,
  } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src="/icons/logo.svg" alt="Logotipo de la página" />
          </Link>
        </LogoContainer>

        <NavMenu>
          <Menu isOpen={isMenuOpen} onToggleMenu={toggleMenu} />
          <CartIconComponent count={count} onClick={toggleCart} />
          <Cart
            isOpen={isCartOpen}
            cartItems={cartItems}
            total={total}
            onBuy={handleBuy}
            onClearCart={handleClearCart}
            onUpdateQuantity={handleUpdateQuantity}
            onClose={closeCart}
          />
          {isCartOpen && (
            <Overlay
              visible="true"
              onClick={closeAll}
            />
          )}
        </NavMenu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;