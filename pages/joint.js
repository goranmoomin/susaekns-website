import Link from "next/link";

import { Section, Heading, Container, Menu, Columns, Box, Block } from "react-bulma-components";

import Layout from "../components/layout";

export default function Joint() {
    return (
        <Layout>
            <Columns>
                <Columns.Column size={2} responsive={{ touch: { hide: { value: true } } }}>
                    <Box>
                        <Menu>
                            <Menu.List title="관절질환">
                                <Menu.List.Item href="#shoulder" renderAs={Link}>어깨</Menu.List.Item>
                                <Menu.List.Item href="#elbow-wrist" renderAs={Link}>팔꿈치 및 손목</Menu.List.Item>
                                <Menu.List.Item href="#knee-foot" renderAs={Link}>무릎 및 족부</Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Section id="shoulder">
                        <Container>
                            <Block><Heading size={3}>어깨</Heading></Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">석회화 건염</Heading>
                            </Block>
                            <Block>
                                <p>
                                    힘줄에 석회가 침착되어 염증 및 통증을 유발하는 질환입니다. 증상이 없으면 치료할 필요가 없으나
                                    갑자기 심한 통증을 유발하기도 하고 극심한 통증으로 잠에서 깨기도 합니다. X-ray나 초음파에서 잘 관찰됩니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">회전근개파열</Heading>
                            </Block>
                            <Block>
                                <p>
                                    회전근개는 견갑하근, 극상근, 극하근, 소원근 등의 네개의 근육 및 힘줄로 구성되어 있습니다.
                                    노령층 및 스포츠 인구가 증가함에 따라 발생빈도가 증가하고 있으며, 사소한 손상, 반복 등작으로 발생할 수 있습니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">유착성 관절낭염(오십견)</Heading>
                            </Block>
                            <Block>
                                <p>
                                    어깨관절을 이루는 조직 중에서 회전근개 관절 활액막, 상완이두근 및 주위조직을 침범하는 퇴행성 변화의 결과로
                                    심한 운동장애를 일으키는 질환으로 동결견이라고도 불립니다. 회복과정은 1~2년 정도로 생각되지만
                                    소수에서는 오랫동안 병적 변화가 지속될 수 있습니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="elbow-wrist">
                        <Container>
                            <Block><Heading size={3}>팔꿈치 및 손목</Heading></Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">테니스엘보(외측상과염)</Heading>
                            </Block>
                            <Block>
                                <p>
                                    팔꿈치의 바깥쪽 돌출된 부위에 염증성 통증이 생기는 것을 말합니다. 테니스의 백핸드 자세에서 팔꿈치 바깥이
                                    무리한 힘을 받게 되어 발생된다고 하여 테니스 엘보라고 말하지만 정확한 진단명은 외측상과염(Lateral Epicondylitis)입니다.
                                    손목을 위로 젖히는 동작에서 증상이 심해지기 때문에 팔과 손목을 쓰는 모든 동작에서 통증이 발생할 수 있습니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">골프엘보(내측상과염)</Heading>
                            </Block>
                            <Block>
                                <p>
                                    골프 엘보는 내측상과염으로 테니스 엘보와 반대로 팔꿈치 안쪽에서 통증이 나타나는 질환입니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">손목 터널증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    손목 앞쪽의 작은 통로인 수근관이 좁아지면 여기를 통과하는 정중신경이 눌려서
                                    정중신경 지배 영역에 이상 증상이 나타나는 경우로 손바닥 및 손가락의 통증 및 저림 증상을 유발합니다.
                                    주부나 컴퓨터를 많이 하는 사람에게서 잘 나타나며 주로 밤에 증상이 심해져 병원에 내원하게 됩니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">방아쇠 수지 증후군</Heading>
                            </Block>
                            <Block>
                                <p>
                                    손가락 굴곡건에 결절이 생기거나 손가락 도르래가 두꺼워져 도르래 아래로 힘줄이 통과할 때
                                    움직임이 제한되고 염증성 통증이 생기는 질환을 말합니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="knee-foot">
                        <Container>
                            <Block><Heading size={3}>무릎 및 족부</Heading></Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">퇴행성 관절염</Heading>
                            </Block>
                            <Block>
                                <p>
                                    무릎의 퇴행성 변화가 발생하는 주된 이유는 몸의 하중이 골고루 분산되지 못하고 무릎의 한 부분에 집중되기 때문에
                                    관절연골이 변성 및 마모되거나 관절면 가장자리에 골극이 형성되는 것입니다.
                                    증상은 경도의 동통, 피로감, 관절의 운동 장애, 관절 주위의 압통, 운동 시 마찰음, 골극 형성 등이 있습니다.
                                    주로 무릎 관절 부위에 동통을 느끼거나 이상음이 나는 것은 초기 증상입니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">슬개건염</Heading>
                            </Block>
                            <Block>
                                <p>
                                    슬개골을 덮고 있는 힘줄에 생기는 염증으로 젊은 층에서 무릎을 무리하게 많이 사용할 때 발생합니다.
                                    축구, 농구, 댄스 등을 많이 할 때 발생할 수 있으며 무릎에 압통이 발생하기도 합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">반월연골 손상</Heading>
                            </Block>
                            <Block>
                                <p>
                                    무릎 사이에 있는 반달모양의 연골로, 안쪽과 바깥쪽에 하나씩 있습니다.
                                    무릎 관절을 보호하고 충격을 완화하는 역할을 수행하며 젊은층 에서는 외상 특히 스포츠 운동 중 손상이 잘 일어나며,
                                    중년이상에서는 별다른 외상 없이도 발생합니다. 수술적 치료가 필요할 수 있습니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">족저 근막염</Heading>
                            </Block>
                            <Block>
                                <p>
                                    족저근막은 발뒷꿈치뼈에서 시작하여 발바닥 앞쪽 기저 부위에 붙은 두껍고 강한 섬유띠를 말합니다.
                                    발의 아치를 유지하고 충격을 흡수하며 체중이 실린 상태에서 발을 들어 올리는 데 도움을 주어
                                    보행 시 중요한 역할을 합니다. 이러한 족저근막이 반복적인 미세 손상을 입어 근막을 구성하는
                                    콜라겐의 변성이 유발되고 염증이 발생한 것을 족저근막염이라 합니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                </Columns.Column>
            </Columns>
        </Layout>
    );
}
