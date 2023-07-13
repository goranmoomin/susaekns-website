import Image from "next/image";

import { Hero, Container, Footer, Content, Element } from "react-bulma-components";

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
                    <Hero.Body>
                        {header ||
                         <Element display="relative" style={{ height: 0, paddingBottom: "20%" }}>
                             <Image src="/images/banner0.jpg" fill style={{ objectFit: "cover" }} alt="" />
                             <Element display="flex" justifyContent="center" alignItems="center"
                                      style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                                 <Element textColor="light">
                                     <Element textSize={3} textWeight="semibold">통증없는 세상을 위한 수색신경외과</Element>
                                     차별화된 진료로 내원하신 환자 여러분의 건강만을<br/>
                                     최우선으로 하는 수색신경외과의원이 되겠습니다.
                                 </Element>
                             </Element>
                         </Element>}
                    </Hero.Body>
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
