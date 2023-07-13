import Image from "next/image";

import { Section, Heading, Container, Menu, Columns, Box, Element, Block } from "react-bulma-components";

import Layout from "../components/layout";

export default function About() {
    return (
        <Layout>
            <Columns>
                <Columns.Column size={2} responsive={{ touch: { hide: { value: true } } }}>
                    <Box>
                        <Menu>
                            <Menu.List title="병원소개">
                                <Menu.List.Item>인사말</Menu.List.Item>
                                <Menu.List.Item>진료안내</Menu.List.Item>
                                <Menu.List.Item>오시는 길</Menu.List.Item>
                                <Menu.List.Item>시설 및 장비</Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Section id="greeting">
                        <Container>
                            <Block><Heading size={3}>인사말</Heading></Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">통증없는 세상을 위한 수색신경외과</Heading>
                            </Block>
                            <Block>
                                <p>
                                    신경외과 전문으로서 다년간 수술 및 비수술적 치료를 경험하면서 어떤 치료가 환자에게 적합한 방법인지를 항상 고민해 왔습니다.
                                    경추나 요추 및 기타 관절들이 따로 치료해야 할 대상이 아닌 유기적 복합체로써 인식하고 체계적인 치료시스템을 구축하여
                                    통증조절, 재활, 및 운동치료 등으로 환자의 완전한 회복을 위해 노력하겠습니다.
                                </p>
                            </Block>
                            <Block>
                                <p>
                                    차별화된 진료로 내원하신 환자 여러분의 건강만을 최우선으로 하는 수색신경외과의원이 되겠습니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="guide">
                        <Block><Heading size={3}>진료안내</Heading></Block>
                        <Columns variableGap={{ desktop: 8 }}>
                            <Columns.Column narrow>
                                <Block>
                                    <Heading size={4} subtitle renderAs="h2">진료과목</Heading>
                                    <ul style={{ listStyle: "circle inside" }}>
                                        <li>정형외과</li>
                                        <li>신경외과</li>
                                        <li>통증의학과</li>
                                        <li>재활의학과</li>
                                        <li>신경과</li>
                                    </ul>
                                </Block>
                            </Columns.Column>
                            <Columns.Column narrow>
                                <Block>
                                    <Heading size={4} subtitle renderAs="h2">진료시간</Heading>
                                    <p>
                                        평일 오전9시 – 오후 6시<br />
                                        토요일 오전 9시 – 오후 2시<br />
                                        일요일 / 공휴일 휴진<br />
                                        점심시간은 오후 12시 30분 – 1시30분<br />
                                        (토요일은 점심시간없이 진료합니다)
                                    </p>
                                </Block>
                            </Columns.Column>
                            <Columns.Column narrow>
                                <Block>
                                    <Heading size={4} subtitle renderAs="h2">진료예약 및 상담</Heading>
                                    <p>
                                        전화: 02-305-4463<br />
                                        Fax: 02-305-4465
                                    </p>
                                </Block>
                            </Columns.Column>
                        </Columns>
                    </Section>
                    <Section>
                        <Block><Heading size={3}>의료진 소개</Heading></Block>
                        <Block clearfix>
                            <Image src="/images/profile.jpg" width={400} height={314} alt="" className="is-pulled-right" />
                            <Heading size={4} subtitle renderAs="h2">원장 조재영</Heading>
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
                        </Block>
                    </Section>
                    <Section id="map">
                        <Heading size={3}>오시는 길</Heading>
                        <Block clearfix>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8489450268016!2d126.89376061526329!3d37.582174530990024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c990eb3f22a03%3A0xf7aabf6ce1f91e14!2z7IiY7IOJ7Iug6rK97Jm46rO87J2Y7JuQ!5e0!3m2!1sko!2skr!4v1612951793894!5m2!1sko!2skr" style={{ minWidth: 400, minHeight: 300 }} allowFullScreen aria-hidden="false" tabIndex="0" className="is-pulled-right" />
                            <p>
                                수색신경외과의원<br />
                                서울특별시 은평구 수색로 256 (수색동 106-1) 3층<br />
                                주변 지하철역: 경인국철 수색역, DMC역<br />
                                주변 버스정류장:
                            </p>
                        </Block>
                    </Section>
                    <Section id="equipment">
                        <Block><Heading size={3}>시설 및 장비</Heading></Block>
                        <Block>

                        </Block>
                    </Section>
                </Columns.Column>
            </Columns>
        </Layout>
    );
}
