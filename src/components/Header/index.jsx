import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import HeaderTop from "./HeaderTop";
import { Container } from "components/Container/style";
import * as Style from "./style";

import { CartIcon, LogoIcon, PhoneLogo } from "assets/images/svgIcons";
import like from "assets/images/like.png";

const Header = () => {
    const [burger, setBurger] = useState(false);

    const handleClick = () => {
        setBurger(!burger);
    };

    useEffect(() => {
        if (burger) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
    });

    return (
        <Style.HeaderWrapper>
            <HeaderTop />
            <Style.HeaderNavbar>
                <Container>
                    <Style.HeaderNavContent>
                        <Style.BurgerMenuContent onClick={() => handleClick()}>
                            <Style.BurgerMenuRows />
                            <Style.BurgerMenuRows />
                            <Style.BurgerMenuRows />
                        </Style.BurgerMenuContent>
                        <Style.LogoLink to='/'>
                            <LogoIcon />
                        </Style.LogoLink>
                        <Style.HeaderNavLinkList>
                            <Style.NavLink to='/'>Главная</Style.NavLink>
                            <Style.NavLink to='/'>Каталог</Style.NavLink>
                            <Style.NavLink to='/discount'>
                                Оптовая продажа
                            </Style.NavLink>
                            <Style.NavLink to='/about-us'>О нас</Style.NavLink>
                        </Style.HeaderNavLinkList>
                        <Style.UserActions>
                            <Style.PhoneContent href={`tel:+${7966558499}`}>
                                <PhoneLogo />
                                +7 (966) 55 88 499
                            </Style.PhoneContent>
                            <Style.ActionBox>
                                <Link to='/'>
                                    <img src={like} alt='like' />
                                </Link>
                                <Link to='/cart'>
                                    <CartIcon />
                                </Link>
                            </Style.ActionBox>
                        </Style.UserActions>
                    </Style.HeaderNavContent>
                </Container>
                <BurgerMenu open={burger} handleClick={handleClick} />
            </Style.HeaderNavbar>
        </Style.HeaderWrapper>
    );
};

export default Header;
