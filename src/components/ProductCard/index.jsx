import React from "react";
import * as S from "./style";

const ProductCard = ({ inCash, image, name, currentPrice, oldPrice, id }) => {
    return (
        <S.ProductCardWrapper>
            <S.ProductImageLink to={`/product/detail/${id}`}>
                <S.InCashTextBox>
                    <S.CashText>
                        {inCash ? "В наличии" : "Нет в наличии"}
                    </S.CashText>
                </S.InCashTextBox>
                <S.SaleBox>Sale</S.SaleBox>
                <S.ProductImage src={image} />
            </S.ProductImageLink>
            <S.ProductCardInfo>
                <S.InfoTitle>{name}</S.InfoTitle>
                <S.PriceBoard>
                    <S.MainPrice>{currentPrice}</S.MainPrice>
                    <S.OldPrice>{oldPrice}</S.OldPrice>
                </S.PriceBoard>
            </S.ProductCardInfo>
        </S.ProductCardWrapper>
    );
};

export default ProductCard;
