import React, {FC} from 'react';
import {Link} from "react-router-dom";
import css from "./CustomLink.module.css"
interface LinkProps extends React.HTMLProps<HTMLElement>{
    to:string;
    text?:string;
    children?:React.ReactNode;
}

const CustomLink:FC<LinkProps> = ({to, text, children, className}) => {
    return (
        <Link to={to} className={`${css.link} ${className}`}>
            {text}
            {children}
        </Link>
    );
};

export default CustomLink;