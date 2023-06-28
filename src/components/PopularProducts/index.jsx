import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperRef } from "hooks/useSwiperRef";
import { Navigation } from "swiper";
import { breakpoints } from "./data";
import { Container } from "components/Container/style";
import { SwiperNavBtn } from "components/Banner/style";
import ProductCard from "components/ProductCard";
import { Title } from "components/WhyUs/style";
import * as S from "./style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowIcon } from "assets/images/svgIcons";

const PopularProducts = () => {
    const [data, setData] = useState([]);

    async function getData() {
        const res = await axios.get(`${process.env.REACT_APP_MAIN_URL}`);
        if (res.status == 200) {
            setData(res.data);
        }
    }

    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();

    useEffect(() => {
        getData();
    }, []);

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
                    breakpoints={breakpoints}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    {data?.map((el) => (
                        <SwiperSlide key={el.id}>
                            <ProductCard
                                inCash={el.inCash}
                                image={el.image}
                                name={el.name}
                                oldPrice={el.oldPrice}
                                currentPrice={el.currentPrice}
                                id={el.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </S.PopularWrapper>
    );
};

export default PopularProducts;
