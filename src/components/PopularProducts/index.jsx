import React, { useEffect, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { breakpoints, popularProductData } from "./data";
import { Container } from "components/Container/style";
import { SwiperNavBtn } from "components/Banner/style";
import { Title } from "components/WhyUs/style";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon } from "assets/images/svgIcons";

const PopularProducts = () => {
    const useSwiperRef = () => {
        const [wrapper, setWrapper] = useState(null);
        const ref = useRef(null);

        useEffect(() => {
            if (ref.current) {
                setWrapper(ref.current);
            }
        }, []);

        return [wrapper, ref];
    };

    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();
    return (
        <S.PopularWrapper>
            <Container>
                <S.PopularHeader>
                    <Title>Наши популярные продукты</Title>
                    <S.PopularSwiperNavigation>
                        <SwiperNavBtn ref={prevElRef}>
                            <ArrowIcon />
                        </SwiperNavBtn>
                        <SwiperNavBtn ref={nextElRef}>
                            <ArrowIcon
                                style={{ transform: "rotate(180deg)" }}
                            />
                        </SwiperNavBtn>
                    </S.PopularSwiperNavigation>
                </S.PopularHeader>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    autoplay={true}
                    loop={true}
                    breakpoints={breakpoints}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    {popularProductData.map((el) => (
                        <S.ProductCard key={el.id}>
                            <S.ProductImageLink to='/'>
                                <S.InCashTextBox>
                                    <S.CashText>
                                        {el.inCash
                                            ? "В наличии"
                                            : "Нет в наличии"}
                                    </S.CashText>
                                </S.InCashTextBox>
                                <S.SaleBox>Sale</S.SaleBox>
                                <S.ProductImage src={el.image} />
                            </S.ProductImageLink>
                            <S.ProductCardInfo>
                                <S.InfoTitle>{el.title}</S.InfoTitle>
                                <S.PriceBoard>
                                    <S.MainPrice>{el.main_price}</S.MainPrice>
                                    <S.OldPrice>{el.oldPrice}</S.OldPrice>
                                </S.PriceBoard>
                            </S.ProductCardInfo>
                        </S.ProductCard>
                    ))}
                </Swiper>
            </Container>
        </S.PopularWrapper>
    );
};

export default PopularProducts;
