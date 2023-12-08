import React from "react";
import styles from "./Navbar.module.css";
import * as data from "../../assets/data/links.json";
import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logosite.png";

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
        <Navbar className={`${styles.navbar} bg-body-tertiary`} expand="lg">
            <Container>
                <Navbar.Brand className="h-100" href="/cisc-scheduler">
                    <img
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        src={logo}
                    />
                </Navbar.Brand>
                <Links links={links} />
            </Container>
        </Navbar>
    );
};

export default Nav;
