import React from 'react';
import css from './Header.module.css'
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import {RouterNames} from "../../shared/enum/RouterNames";
import CustomLink from "../../feature/CustomLink/CustomLink";

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logoContainer}>
                <span className={css.logoName}>MITIT</span>
                <img className={css.logo} src={logo} alt=""/>
            </div>

            <div className={css.linksContainer}>
                <CustomLink to={RouterNames.DISTRIBUTIONS} text={"Distributions"}>
                    <i className="bi bi-mortarboard"></i>
                </CustomLink>
                <CustomLink to={RouterNames.ADMIN} text={"Manage"}>
                    <i className="bi bi-tools"></i>
                </CustomLink>
            </div>
        </div>
    );
};

export default Header;