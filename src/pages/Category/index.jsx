import Header from "components/Header";
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "components/ProductCard";
import { Container } from "components/Container/style";
import BreadCrumbs from "components/BreadCrumbs";
import Footer from "components/Footer";
import PopularProducts from "components/PopularProducts";
import ContactForm from "components/ContactForm";
import InfoColumns from "components/BreadCrumbs/InfoColumns";
import {
    infoData,
    infoSecondData,
} from "components/BreadCrumbs/InfoColumns/data";

const Category = () => {
    const { type } = useParams();
    const [data, setData] = useState([]);
    const categoryText = type.toLocaleLowerCase();

    async function getProduct() {
        const res = await axios.get(
            `${process.env.REACT_APP_MAIN_URL}?category=${categoryText}`
        );
        if (res.status == 200) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getProduct();
    }, [type]);

    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs disableText={"Каталог"} />
                <CategoryListWrapper>
                    {data?.map((el) => (
                        <ProductCard
                            key={el.id}
                            currentPrice={el.currentPrice}
                            image={el.image}
                            inCash={el.inCash}
                            name={el.name}
                            oldPrice={el.oldPrice}
                        />
                    ))}
                </CategoryListWrapper>
            </Container>
            <PopularProducts />
            <InfoColumns data={infoData} />
            <InfoColumns data={infoSecondData} reverse={true} />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Category;

const CategoryListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-block: 50px;
`;
