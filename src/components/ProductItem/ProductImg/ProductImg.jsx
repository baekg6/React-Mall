import React from 'react';
import styled from 'styled-components';

const ProductImgCont = styled.img`
    position: relative;
    width: 380px;
    height: 380px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
`;

export default function ProductImg({ src }) {
    const url = 'https://test.api.weniv.co.kr/' + src;
    return <ProductImgCont src={url} alt="" />;
}
