import React from "react";
import Image from "next/image";

import { Box, Section, Tile, Heading, Notification } from "react-bulma-components";
import { useKeenSlider } from "keen-slider/react";

import Layout from "../components/layout";

function Slide({ children }) {
    return <div className="keen-slider__slide" style={{ position: "relative", height: 0, paddingBottom: "40%" }}>{children}</div>;
}

function AutoSlider({ children }) {
    let [pause, setPause] = React.useState(false);
    let timer = React.useRef();
    let [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        dragStart: () => { setPause(true); },
        dragEnd: () => { setPause(false); }
    });
    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true);
        });
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false);
        });
    }, [sliderRef]);
    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next();
            }
        }, 2000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);
    return (
        <div ref={sliderRef} className="keen-slider">
            {children}
        </div>
    );
}

export default function Home() {
    return (
        <Layout header={
            <AutoSlider>
                <Slide>
                    <Image src="/images/banner0.jpg" fill style={{objectFit: "cover"}} alt="" />
                    <div style={{ position: "absolute", inset: "20%", backgroundColor: "rgba(0, 0, 0, 20%)", color: "white" }}>메인 배너 1</div>
                </Slide>
                <Slide>
                    <Image src="/images/banner1.jpg" fill style={{objectFit: "cover"}} alt="" />
                    <div style={{ position: "absolute", inset: "20%", backgroundColor: "rgba(0, 0, 0, 20%)", color: "white" }}>메인 배너 2</div>
                </Slide>
            </AutoSlider>
        }>
            <Section>
                <Tile kind="ancestor">
                    <Tile size={8} vertical>
                        <Tile>
                            <Tile kind="parent" vertical>
                                <Tile kind="child">
                                    <Box textColor="white" backgroundColor="info">
                                        <Heading textColor="white" size={4}>진료 일정</Heading>
                                        <p>
                                            평일 오전9시 – 오후 6시<br />
                                            토요일 오전 9시 – 오후 2시<br />
                                            일요일 / 공휴일 휴진<br />
                                            점심시간은 오후 12시 30분 – 1시30분<br />
                                            (토요일은 점심시간없이 진료합니다)
                                        </p>
                                    </Box>
                                </Tile>
                                <Tile kind="child">
                                    <Box textColor="white" backgroundColor="primary">
                                        <Heading textColor="white" size={4}>주요 경력</Heading>
                                        <ul style={{ listStyle: "circle inside" }}>
                                            <li>중앙대학교 의과대학 졸업</li>
                                            <li>신경외과 전문의</li>
                                            <li>중앙대학교 신경외과 박사수료</li>
                                            <li>성애병원 신경외과 과장</li>
                                            <li>중앙대학교 신경외과 외래교수</li>
                                            <li>대한 신경외과학회 정회원</li>
                                            <li>대한 척추신경외과학회 정회원</li>
                                            <li>대한 노인신경외과학회 정회원</li>
                                            <li>대한 신경손상학회 정회원</li>
                                        </ul>
                                    </Box>
                                </Tile>
                            </Tile>
                            <Tile kind="parent">
                                <Tile kind="child">
                                    <Box>
                                        <Heading>Middle Tile...</Heading>
                                        <Heading subtitle>With image Tile...</Heading>
                                        <p>텍스트 텍스트 텍스트</p>
                                    </Box>
                                </Tile>
                            </Tile>
                        </Tile>
                        <Tile kind="parent">
                            <Tile kind="child">
                                <Box>Hello, World!</Box>
                            </Tile>
                        </Tile>
                    </Tile>
                    <Tile kind="parent">
                        <Tile kind="child" renderAs={Notification} color="success">
                            <div className="content">
                                <Heading>Tall tile</Heading>
                                <Heading subtitle>With even more content</Heading>
                                <div className="content" />
                            </div>
                        </Tile>
                    </Tile>
                </Tile>
            </Section>
        </Layout>
    );
}
