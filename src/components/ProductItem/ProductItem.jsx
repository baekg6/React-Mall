import React from 'react';
import styled from 'styled-components';
import ProductImg from './ProductImg/ProductImg';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';

const ProductItemCard = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export default function ProductItem({ item }) {
    return (
        <ProductItemCard>
            <ProductImg src={item.thumbnailImg} />
            <ProductName name={item.productName} />
            <ProductPrice price={item.price} />
        </ProductItemCard>
    );
}