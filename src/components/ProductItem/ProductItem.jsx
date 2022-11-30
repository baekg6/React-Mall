import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LikeButton from './LikeButton/LikeButton';
import ProductImg from './ProductImg/ProductImg';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';

const ProductItemCard = styled.li``;

const ProductItemLink = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export default function ProductItem({ item }) {
    return (
        <ProductItemCard>
            <ProductItemLink to={`/product/${item.id}`}>
                <ProductImg src={item.thumbnailImg} />
                <ProductName name={item.productName} />
                <LikeButton />
                <ProductPrice price={item.price} />
            </ProductItemLink>
        </ProductItemCard>
    );
}
