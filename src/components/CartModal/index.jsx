import React, { useContext, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import ProductListItems from "./ProductListItems";
import Button from "components/Button";
import MainContext from "context/CartContext";
import * as S from "./style";

import { CloseIcon } from "assets/images/svgIcons";

export default function CartModal({ cartModal, handleModal, data }) {
    const { cartItems } = useContext(MainContext);

    const total = cartItems.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.currentPrice * currentValue.quantity,
        0
    );
    return (
        <Modal
            open={cartModal}
            onClose={handleModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <S.ModalBox>
                <S.ModalBoxHeader>
                    <S.HeaderTitle>Корзина</S.HeaderTitle>
                    <S.CloseBtn onClick={handleModal}>
                        <CloseIcon />
                    </S.CloseBtn>
                </S.ModalBoxHeader>
                <S.ModalBoxBody isEmpty={!data.lenght}>
                    {data.length ? (
                        <S.ProductList>
                            {data.map((el) => (
                                <ProductListItems key={el.id} product={el} />
                            ))}
                            <S.BuyActions>
                                <S.BuyPriceBoard>
                                    <S.TotalPriceTitle>
                                        Итого:
                                    </S.TotalPriceTitle>
                                    <S.TotalPrice>
                                        {total.toLocaleString()} ₽
                                    </S.TotalPrice>
                                </S.BuyPriceBoard>
                                <S.PriceBtnGroup>
                                    <Button text={"Оформить заказ"} />
                                    <S.LinkBtn to='/catalog'>
                                        Продолжить покупки
                                    </S.LinkBtn>
                                </S.PriceBtnGroup>
                            </S.BuyActions>
                        </S.ProductList>
                    ) : (
                        <S.EmptyTitle>
                            Корзина на данный момент пуста 🤷‍♂️🤷‍♂️🤷‍♂️
                        </S.EmptyTitle>
                    )}
                </S.ModalBoxBody>
            </S.ModalBox>
        </Modal>
    );
}
