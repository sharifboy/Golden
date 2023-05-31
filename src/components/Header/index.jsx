import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import { Container } from "../Container/style";
import * as Style from "./style";

import { CartIcon, LogoIcon, PhoneLogo } from "../../assets/images/svgIcons";
import like from "../../assets/images/like.png";

const Header = () => {
    return (
        <Style.HeaderWrapper>
            <HeaderTop />
            <Style.HeaderNavbar>
                <Container>
                    <Style.HeaderNavContent>
                        <Link to='/'>
                            <LogoIcon />
                        </Link>
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
            </Style.HeaderNavbar>
        </Style.HeaderWrapper>
    );
};

export default Header;
