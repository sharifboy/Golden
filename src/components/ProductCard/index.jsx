import React, { useContext } from "react";
import * as S from "./style";
import Rate from "components/Rate";
import { Button } from "@mui/material";
import MainContext from "reducer/CartContext";

const ProductCard = ({ data, select }) => {
    const { inCash, image, name, currentPrice, oldPrice, id, mark } = data;
    const cartToggle = () => {
        return select ? removeFromCart(id) : addToCart(data);
    };
    const { addToCart, removeFromCart } = useContext(MainContext);
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
                <S.RateText>
                    <Rate mark={mark} />
                    <S.RateTextInfo>(12) отзывов</S.RateTextInfo>
                </S.RateText>
                <S.InfoTitle>{name}</S.InfoTitle>
                <S.PriceBoard>
                    <S.MainPrice>{currentPrice}</S.MainPrice>
                    <S.OldPrice>{oldPrice}</S.OldPrice>
                </S.PriceBoard>
                <Button onClick={cartToggle}>
                    {select ? "Remove from cart" : "Add to cart"}
                </Button>
            </S.ProductCardInfo>
        </S.ProductCardWrapper>
    );
};

export default ProductCard;
