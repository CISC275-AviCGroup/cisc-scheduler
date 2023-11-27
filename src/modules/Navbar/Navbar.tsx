import React from "react";
import styles from "./Navbar.module.css";
import * as data from "../../assets/data/links.json";
import { NavLink } from "react-router-dom";
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

type LinkProps = {
    links: Link[];
};

const Links = ({ links }: LinkProps) => {
    return (
        <div className={styles["links-container"]}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles["link"]}>
                        <NavLink to={link.href}>{link.label}</NavLink>
                    </div>
                );
            })}
        </div>
    );
};

const Nav = () => {
    console.log(links);
    return (
        <nav className={styles.navbar}>
            <Links links={links} />
        </nav>
    );
};

export default Nav;
