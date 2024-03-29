import Link from "next/link";

import { Section, Heading, Container, Menu, Columns, Box, Block } from "react-bulma-components";

import Layout from "../components/layout";

export default function Spine() {
    return (
        <Layout>
            <Columns>
                <Columns.Column size={2} responsive={{ touch: { hide: { value: true } } }}>
                    <Box>
                        <Menu>
                            <Menu.List title="척추질환">
                                <Menu.List.Item href="#cervical" renderAs={Link}>경추질환</Menu.List.Item>
                                <Menu.List.Item href="#lumbar" renderAs={Link}>요추질환</Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Section id="cervical">
                        <Container>
                            <Block><Heading size={3}>경추질환</Heading></Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">목 디스크 탈출증(경추 추간판 탈출증)</Heading>
                            </Block>
                            <Block>
                                <p>
                                    경추 추간판이 튀어나와서 신경을 자극하는 것으로 급성인 경우에는 뒤틀린 자세로 장시간 독서를 하거나 텔레비전 시청을 하는 경우,
                                    너무 높은 베개를 베고 잠을 잔 경우에도 발생할 수 있으며, 중년 이후에는 경추 추간판이 노화하여 쉽게 발생됩니다.
                                    일반적으로 경추 상부 디스크 탈출증은 목이 아프고 뻣뻣하며,
                                    경추 하부 디스크 탈출증은 어깨와 팔을 따라서 손가락 끝까지 저리고 아프며 등 뒤나 견갑골 사이에도 통증이 나타납니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">거북목/일자목 증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    경추의 정상적인 구조는 C-형 곡선입니다. 그러나 독서나 핸드폰 사용시 부적절한 자세의 지속,
                                    높은 베개를 베고 자는 습관 등이 있을 경우 경부 주위 근육의 경직 등으로 인하여
                                    목이 일자 형태가 되거나 앞으로 기울어지는 것을 말합니다.
                                    이런 유형의 목은 추후 목 디스크로 발전할 가능성이 많으므로 자세 교정이 필요합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">경추 후관절 증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    경추 후관절증후군(Cervical Facet Joint Syndrome)이란 퇴행성 관절염이나 염좌,
                                    분절 불안정 등에 의해 후관절을 지배하는 감각신경이 자극되는 질환을 일컫습니다.
                                    목 디스크 탈출증은 주로 어깨, 견갑골, 팔과 손으로 통증이 나타나는데 비하여,
                                    경추 후관절 증후군은 뒷목주위 통증으로 나타납니다. 퇴행성 관절염의 일종이므로 노령층에서 발생합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">근막통증 증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    어깨나 목 주변부에 통증이 나타나며, 일반적으로 어깨 통증이 양측으로 옵니다.
                                    긴장성 두통 및 경추 후관절 증후군과 더불어 가장 흔한 후경부 통증의 원인입니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="lumbar">
                        <Container>
                            <Block><Heading size={3}>요추질환</Heading></Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">허리 디스크 탈출증</Heading>
                            </Block>
                            <Block>
                                <p>
                                    요추 디스크(추간판)이 옆으로 빠져 나와 신경근 또는 척수를 누르는 질환으로
                                    젊은 환자는 증상의 초기에는 요통이 주로 오며, 진행할수록 압박 받는 신경근의 해당 피부분절을 따라
                                    하지 방사통이 나타나게 됩니다. 수핵 탈출증이 심하여 디스크의 섬유륜을 뚫고 나온 경우에는
                                    오히려 요통은 호전되며, 하지 방사통 및 근력저하가 더 뚜렷이 나타납니다.
                                    고령층에게는 요통은 흔하지 않으며 하지 방사통의 형태로 발현됩니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">요추관협착증</Heading>
                            </Block>
                            <Block>
                                <p>
                                    요추관은 전방에는 디스크(추간판), 후방에는 황색인대로 둘러싸여 있는데, 퇴행성 변화로 인하여
                                    전방에서는 디스크가 돌출되며 후방에서는 황색인대가 두꺼워져 요추관이 좁아진 경우를 일컫습니다.
                                    주로 보행시 하지 방사통의 형태로 나타나며, 양측성으로 나타나는 경우가 많고, 요통을 동반하기도 합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">천장관절 증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    천장관절주변 인대의 손상 및 관절의 염증으로 엉덩이 주변으로 통증이 발생하는 것을 말하며,
                                    요통, 엉치부위 통증으로 나타나기도 합니다. 일어설 때 및 앉을 때 통증이 심하며, 임신과 출산으로 인한 인대 손상,
                                    척추 측만증이나 골반 불균형으로 인한 하지 길이의 차이, 양반다리를 많이 하는 경우에 발생하며,
                                    척추고정술 시행 후 혹은 골프 및 에어로빅 등의 운동 후에도 발생합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">요추 후관절 증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    경추 후관절 증후군과 같은 원리로 후관절 부위의 퇴행 관절염이나 염좌, 분절 불안정 등에 의해
                                    후관절을 지배하는 감각신경이 염증에 의해 자극되어 발생하는 질환을 일컫습니다.
                                    일어서는 자세 혹은 허리를 뒤로 젖힐 때 요통이 나타납니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                </Columns.Column>
            </Columns>
        </Layout>
    );
}
