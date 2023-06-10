import Header from "components/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryList } from "components/CategoryList/style";

const Category = () => {
    const { type } = useParams();
    const [data, setData] = useState([]);
    const categoryText = type.toLocaleLowerCase();
    console.log(categoryText);

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

    console.log(data);
    return (
        <>
            <Header />
            <CategoryList>
                {data?.map((el) => (
                    <div key={el.id}>
                        <img src={el.image} alt='' />
                        <h2>{el.name}</h2>
                    </div>
                ))}
            </CategoryList>
        </>
    );
};

export default Category;
