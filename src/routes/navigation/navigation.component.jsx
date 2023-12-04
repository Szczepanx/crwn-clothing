import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.styles";
import { selectCurerentUser } from "../../store/user/user.selector";
const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurerentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer className="nav-links-container">
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink>CONTACT</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
