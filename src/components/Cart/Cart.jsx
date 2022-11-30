import React from 'react';
import styled from 'styled-components';
import CartIcon from '../../assets/images/icon-shopping-cart-white.svg';
const CartButton = styled.a`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--main-color) url(${CartIcon}) no-repeat center / 40px 40px;
`;

export default function Cart() {
    return <CartButton></CartButton>;
}
