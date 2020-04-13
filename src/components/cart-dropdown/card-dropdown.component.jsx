import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Checkout</CustomButton>
  </div>
);

export default CartDropdown;