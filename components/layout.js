import React from "react";

import { Hero, Container } from "react-bulma-components";

import Head from "./head.js";
import Navbar from "./navbar.js";

export default function Layout({ header, children }) {
    return (
        <>
            <Head />
            <header>
                <Hero>
                    <Hero.Header>
                        <Navbar />
                    </Hero.Header>
                    <Hero.Body>{header}</Hero.Body>
                </Hero>
            </header>
            <main>
                <Container>{children}</Container>
            </main>
        </>
    );
}
