import image from "../../assets/images/Banner/image_1.png";

const popularProductData = [
    {
        id: 0,
        inCash: true,
        image: image,
        title: "Дверной Замок Golden Soft для отеля",
        main_price: "33 000₽",
        oldPrice: "37 000₽",
    },
    {
        id: 1,
        inCash: false,
        image: image,
        title: "Вариативный замок Golden Soft для отеля",
        main_price: "7 000₽",
        oldPrice: "8 000₽",
    },
    {
        id: 2,
        inCash: true,
        image: image,
        title: "Дверной Замок Golden Soft для офиса",
        main_price: "33 000₽",
        oldPrice: "39 000₽",
    },
    {
        id: 3,
        inCash: true,
        image: image,
        title: "Дверной Замок Golden Soft для офиса",
        main_price: "9 000₽",
        oldPrice: "12 000₽",
    },
    {
        id: 4,
        inCash: true,
        image: image,
        title: "Дверной Замок Golden Soft для отеля",
        main_price: "33 000₽",
        oldPrice: "37 000₽",
    },
    {
        id: 5,
        inCash: true,
        image: image,
        title: "Дверной Замок Golden Soft для отеля",
        main_price: "33 000₽",
        oldPrice: "37 000₽",
    },
];

const breakpoints = {
    300: {
        slidesPerView: 1,
    },
    460: {
        slidesPerView: 2,
    },
    620: {
        slidesPerView: 3,
    },
    770: {
        slidesPerView: 4,
    },
};

export { popularProductData, breakpoints };
