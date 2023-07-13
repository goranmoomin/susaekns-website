import React from "react";

import { Hero, Container, Footer, Content } from "react-bulma-components";

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
            <footer>
                <Footer>
                    <Container>
                        <Content style={{ textAlign: "center" }}>
                            <strong>수색신경외과의원</strong> 서울특별시 은평구 수색로 256, 3층 (수색동 106-1)<br />
                            <strong>TEL.</strong> 02-305-4463 <strong>사업자번호.</strong> 110-91-59844
                        </Content>
                    </Container>
                </Footer>
            </footer>
        </>
    );
}
