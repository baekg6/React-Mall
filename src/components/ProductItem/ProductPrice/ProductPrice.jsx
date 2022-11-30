import React from 'react';
import styled from 'styled-components';

const PriceCont = styled.strong`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-left: 2px;
    }
`;
export default function ProductPrice({ price }) {
    return (
        <PriceCont>
            {price}
            <span>원</span>
        </PriceCont>
    );
}
