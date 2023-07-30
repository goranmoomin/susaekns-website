import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Section, Tile, Heading, Notification, Content, Columns, Element } from "react-bulma-components";
import { useKeenSlider } from "keen-slider/react";

import Layout from "../components/layout";

function Slide({ children }) {
    return <div className="keen-slider__slide is-relative" style={{ height: 0, paddingBottom: "40%" }}>{children}</div>;
}

function AutoSlider({ children }) {
    let [pause, setPause] = useState(false);
    let timer = useRef();
    let [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        dragStart: () => { setPause(true); },
        dragEnd: () => { setPause(false); }
    });
    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true);
        });
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false);
        });
    }, [sliderRef]);
    useEffect(() => {
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
                    <Image src="/images/banner0.jpg" fill style={{ objectFit: "cover" }} alt="" />
                    <Element display="flex" justifyContent="center" alignItems="center"
                             style={{ position: "absolute", inset: "20%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <Element textColor="light" textSize={4} textWeight="semibold">
                            수색신경외과 의원은 풍부한 경험을 바탕으로<br />가족같은 마음으로 진료하겠습니다.<br/>
                            척추 / 관절 / 뇌혈관 / 통증 / 도수치료
                        </Element>
                    </Element>
                </Slide>
                <Slide>
                    <Image src="/images/banner1.jpg" fill style={{ objectFit: "cover" }} alt="" />
                    <Element display="flex" justifyContent="center" alignItems="center"
                             style={{ position: "absolute", inset: "20%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                        <Element textAlign="center" textColor="light" textSize={2} textWeight="semibold">
                            숙련된 전문 도수치료사의<br />1:1 맞춤 치료
                        </Element>
                    </Element>
                </Slide>
            </AutoSlider>
        }>
            <Section>
                <Heading size={4}>진료 내용</Heading>
                <Tile kind="ancestor">
                    <Tile kind="parent" vertical>
                        <Tile kind="child" display="relative" style={{ height: 0, paddingBottom: "50%" }} className="overflow-hidden">
                            <Link href="/nonsurgical#manual">
                                <Image src="/images/therapy.jpeg" fill className="object-cover transition-transform hover:scale-125" alt="" />
                            </Link>
                            <Element display="flex" justifyContent="center" alignItems="center" overlay className="bg-black/30 pointer-events-none">
                                <Element textColor="light" textSize={4}>
                                    도수치료
                                </Element>
                            </Element>
                        </Tile>
                        <Tile kind="child" display="relative" style={{ height: 0, paddingBottom: "50%" }} className="overflow-hidden">
                            <Link href="/nonsurgical#shockwave">
                                <Image src="/images/shockwave.jpeg" fill className="object-cover transition-transform hover:scale-125" alt="" />
                            </Link>
                            <Element display="flex" justifyContent="center" alignItems="center" overlay className="bg-black/30 pointer-events-none">
                                <Element textColor="light" textSize={4}>
                                    체외충격파치료
                                </Element>
                            </Element>
                        </Tile>
                    </Tile>
                    <Tile kind="parent" vertical>
                        <Tile kind="child" display="relative" style={{ height: 0, paddingBottom: "50%" }} className="overflow-hidden">
                            <Link href="/joint">
                                <Image src="/images/joint.jpeg" fill className="object-cover transition-transform hover:scale-125" alt="" />
                            </Link>
                            <Element display="flex" justifyContent="center" alignItems="center" overlay className="bg-black/30 pointer-events-none">
                                <Element textColor="light" textSize={4}>
                                    관절치료
                                </Element>
                            </Element>
                        </Tile>
                        <Tile kind="child" display="relative" style={{ height: 0, paddingBottom: "50%" }} className="overflow-hidden">
                            <Link href="/spine">
                                <Image src="/images/spine.jpeg" fill className="object-cover transition-transform hover:scale-125" alt="" />
                            </Link>
                            <Element display="flex" justifyContent="center" alignItems="center" overlay className="bg-black/30 pointer-events-none">
                                <Element textColor="light" textSize={4}>
                                    척추치료
                                </Element>
                            </Element>
                        </Tile>
                    </Tile>
                </Tile>
            </Section>
            <Section>
                <Columns>
                    <Columns.Column>
                        <Heading size={4}>진료 일정</Heading>
                        <Content>
                            <strong>평일:</strong> 09:00 AM ~ 06:00 PM<br />
                            <strong>토요일:</strong> 09:00 AM ~ 02:00 PM<br />
                            <strong>일요일 / 공휴일:</strong> 휴진<br />
                            <br />
                            <strong>점심시간:</strong> 12:30 PM ~ 01:30 PM<br />
                            (토요일은 점심시간 없이 진료합니다)
                        </Content>
                    </Columns.Column>
                    <Columns.Column>
                        <Heading size={4}>오시는 길</Heading>
                        <Content>
                            서울특별시 은평구 수색로 256 (수색동 106-1) 3층<br />
                            <strong>지하철역:</strong> 경인국철 수색역, DMC역<br />
                            <strong>버스정류장:</strong><br />
                            <strong>TEL.</strong> 02-305-4463
                        </Content>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8489450268016!2d126.89376061526329!3d37.582174530990024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c990eb3f22a03%3A0xf7aabf6ce1f91e14!2z7IiY7IOJ7Iug6rK97Jm46rO87J2Y7JuQ!5e0!3m2!1sko!2skr!4v1612951793894!5m2!1sko!2skr" style={{ width: "100%", minHeight: 300 }} allowFullScreen aria-hidden="false" tabIndex="0" />
                    </Columns.Column>
                </Columns>
            </Section>
        </Layout>
    );
}
