import Link from "next/link";

import { Section, Heading, Container, Menu, Columns, Box, Block, Content } from "react-bulma-components";

import Layout from "../components/layout";

export default function Nonsurgical() {
    return (
        <Layout>
            <Columns>
                <Columns.Column size={2} responsive={{ touch: { hide: { value: true } } }}>
                    <Box>
                        <Menu>
                            <Menu.List title="비수술적치료">
                                <Menu.List.Item href="#manual" renderAs={Link}>도수치료</Menu.List.Item>
                                <Menu.List.Item href="#carm" renderAs={Link}>C-arm 유도 척추중재 시술</Menu.List.Item>
                                <Menu.List.Item href="#prp" renderAs={Link}>PRP 자가혈 주사치료</Menu.List.Item>
                                <Menu.List.Item href="#supersonic" renderAs={Link}>근골격 초음파 유도시술</Menu.List.Item>
                                <Menu.List.Item href="#prolo" renderAs={Link}>프롤로 치료</Menu.List.Item>
                                <Menu.List.Item href="#dna" renderAs={Link}>DNA 인대증식 치료</Menu.List.Item>
                                <Menu.List.Item href="#shockwave" renderAs={Link}>체외충격파 치료</Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Section id="manual">
                        <Container>
                            <Block>
                                <Heading size={3}>도수치료</Heading>
                            </Block>
                            <Block>
                                <p>
                                    도수치료는 인체의 해부학적 구조와 역학적 병변에 대해 균형 잡힌 지식을 가진 치료사가 손과 몸,
                                    도구를 이용하여 환자의 척추와 관절의 기능을 회복하는 치료법입니다.
                                    마사지와 달리 경직된 근막과 관절을 이완시킬 뿐만 아니라 근골격계 이상을 직접 평가해 균형을 바로 잡기 위해서
                                    미세한 변화를 감지할 수 있는 능력이 필요하기 때문에 경험 많은 숙련된 의료진이 시행하는 것이 유리할 수 있습니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">적응증</Heading>
                            </Block>
                            <Block>
                                <ul>
                                    <li>두통 및 불면증, 만성 피로</li>
                                    <li>수술 전/후의 환자에서 빠른 회복을 촉진</li>
                                    <li>척추나 관절에 만성 통증 (근통, 신경통 등)</li>
                                    <li>급성 외상 등을 인대나 근육이 약해지거나 강직된 경우</li>
                                    <li>잘못된 자세 등으로 인하여 척추, 관절 등에 체형 교정이 필요한 경우</li>
                                </ul>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">도수치료의 효과</Heading>
                            </Block>
                            <Block>
                                <ul>
                                    <li>혈액 순환 및 경직된 근육과 연부조직 이완을 통한 만성 통증 완화</li>
                                    <li>관절 가동성 증가 및 기능 증진</li>
                                    <li>근력과 지구력 강화</li>
                                    <li>고유수용성 감각 촉진</li>
                                    <li>협응력 및 근육 안정화</li>
                                    <li>신체 비대칭 개선을 통한 올바른 체형 교정</li>
                                </ul>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="carm">
                        <Container>
                            <Block>
                                <Heading size={3}>C-arm 유도 척추중재 시술</Heading>
                            </Block>
                            <Block>
                                <p>
                                    C-arm을 이용한 방사선 척추중재 시술은 허리디스크, 척추협착증, 척추후관절증후군, 목디스크
                                    등으로 인한 통증을 치료하기 위하여 직접 영상을 보면서 정확한 위치에 주사 시술을 할 수 있는 수술 기입니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">장점</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <ul>
                                        <li>비교적 짧은 시술 시간</li>
                                        <li>직접적인 약물 주입으로 인한 빠른 통증 감소</li>
                                        <li>영상 유도하로 정확한 시술 도움</li>
                                        <li>비교적 낮은 부작용으로 고령 및 만성 질환자 치료 가능</li>
                                        <li>절개가 없는 비수술 치료법</li>
                                    </ul>
                                </Content>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">적응증</Heading>
                            </Block>
                            <Block>
                                <p>
                                    목, 허리, 어깨 통증 등으로 나타나는 각종 디스크 질환 및 척추관 협착증
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="prp">
                        <Container>
                            <Block>
                                <Heading size={3}>PRP 자가혈 주사치료</Heading>
                            </Block>
                            <Block>
                                <p>
                                    PRP 주사 치료는 인체의 자연 치유를 담당하는 성장인자가 다량 포함되어 있는
                                    혈소판을 추출하여 손상된 피부나 조직의 재생 과정에 관여하므로,
                                    근본적으로 통증 및 염증을 감소시켜주는 신개념 자가혈을 이용한 통증 치료 방법입니다.
                                </p>
                                <p>
                                    혈소판에는 다양한 성장인자 (EGF, PDGF, TGF, FGF-2, VEGF 등), 줄기세포, 사이토카인이 풍부합니다.
                                    이 성장인자들은 상처 치유, 세포 증식, 콜라겐 합성, 상피세포 성장 촉진, 신생혈관 재생 등을 돕습니다.
                                    따라서 PRP는 인체의 자연 치유 과정을 활성화시켜 손상된 조직의 근본적인 통증 및 염증을 감소시켜주는 치료 방법으로,
                                    만성적으로 인대, 근육 문제가 있는 분들에게 적합한 치료라고 생각하면 됩니다.
                                </p>
                                <p>
                                    또한 일반적인 치료 방법보다 치유, 재생 속도가 2-3배 이상 빨라 운동 선수들의 부상으로부터 빠르게 회복시켜주어
                                    별도의 재활 과정 없이 시술 후 바로 일상 생활 복귀가 가능합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">장점</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <ul>
                                        <li>근본적인 치료 방법</li>
                                        <li>강력한 치유력</li>
                                        <li>빠르고 간단한 치료 방법</li>
                                        <li>안전한 치료</li>
                                    </ul>
                                </Content>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="supersonic">
                        <Container>
                            <Block>
                                <Heading size={3}>근골격 초음파 유도시술</Heading>
                            </Block>
                            <Block>
                                <p>
                                    근골격계 및 관절 질병을 초음파 진단기를 이용하여 병변의 진단 및 초음파 유도하에 치료합니다. 초음파로 문제 병변을 확인한 후 정확히 병변 부위를 치료할 수 있으며, 이때 초음파를 통해 주사 바늘의 위치, 주사액이 퍼지는 방향 등을 볼 수 있어 부작용을 최소화하고 시술 시간을 줄일 수 있습니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">장점</Heading>
                            </Block>
                            <Block>
                                <ul>
                                    <li>짧은 검사 및 시술 시간</li>
                                    <li>진찰과 검사를 동시에 진행할 수 있음</li>
                                    <li>방사선을 사용하지 않음</li>
                                    <li>CT나 MRI에 비해 비용이 저렴하고 증상이 있는 부위를 선택적으로 치료</li>
                                </ul>
                            </Block>
                            <Block>
                                <Heading size={5} subtitle renderAs="h3">적응증</Heading>
                            </Block>
                            <Block>
                                <ul>
                                    <li>어깨: 회전근개 손상, 오십견, 퇴행성 관절염 등</li>
                                    <li>팔꿈치: 테니스/골프엘보우, 점액낭염 등</li>
                                    <li>무릎관절, 족관절 등의 염증 및 인대손상 등 다양한 근골격계 질환에 적응됩니다.</li>
                                </ul>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="prolo">
                        <Container>
                            <Block>
                                <Heading size={3}>프롤로 치료</Heading>
                            </Block>
                            <Block>
                                <p>
                                    프롤로 주사는 증식(Proliferation)과 치료(Therapy)의 합성어로 세포 증식을 유도한다는
                                    의미를 가지고 있습니다. 즉, 우리 몸 스스로 치유 능력을 활성화시켜서 약해진 조직을 강화시키는 원리입니다.
                                    따라서 수술 없이도 근본적인 원인을 해결하기 때문에 부작용의 부담을 줄일 수 있습니다.
                                    또한 시술 시간이 짧고 간단하며 반복 시술이 가능합니다.
                                </p>
                            </Block>
                            <Block>
                                <p>
                                    프롤로 주사는 인대 강화 주사라고도 불리며 손상된 인대 부위에 고농도 포도당 용액을
                                    주사함으로써 약해진 인대 조직을 증식시켜주는 치료입니다. 즉, 우리 몸 스스로 회복하도록 도와주는 것입니다.
                                    통증 부위에 직접 약물을 주입하기 때문에 보다 빠르고 효과적으로 증상을 개선할 수 있다는 장점이 있습니다.
                                    최소 3~5회 이상 꾸준히 받아야 하고, 상태에 따라 10회 이상 진행하기도 합니다.
                                    따라서 의료진의 경험과 노하우가 중요한 요소입니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">장점</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <ul>
                                        <li>주사 치료로 간편</li>
                                        <li>피부에 시술흔적이 적음</li>
                                        <li>혈관, 인대, 근육, 힘줄에 직접적인 재생</li>
                                        <li>짧은 시술 시간</li>
                                        <li>후유증, 합병증 우려 적음</li>
                                    </ul>
                                </Content>
                            </Block>
                            <Block>
                                <Heading size={5} subtitle renderAs="h3">적응증</Heading>
                            </Block>
                            <Block>
                                <p>
                                    목, 허리, 어깨, 무릎, 팔꿈치, 손목, 발목 등 다양한 관절 부위에 적용될 수 있습니다.
                                    만성 통증 질환과 스포츠 손상 환자에게 도움이 될 수 있습니다.
                                    오십견, 회전근개파열, 석회화건염, 테니스 엘보, 골프엘보, 족저근막염, 아킬레스건염, 슬개건염,
                                    연골연화증, 퇴행성 관절염, 디스크 질환 등 거의 모든 근골격계 질환에 적용 가능합니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="dna">
                        <Container>
                            <Block>
                                <Heading size={3}>DNA 인대증식 치료</Heading>
                            </Block>
                            <Block>
                                <p>
                                    DNA 치료는 PDRN 성분에서 유래한 것입니다. PDRN은 Polydeoxyribonucleotide의 줄임말입니다.
                                    "연어주사"라고도 불리는 이 주사는 의약품 원료로써 연어, 송어 등의 정액에서 고분자 DNA를
                                    일정 크기로 분획하여 제조된 저분자 DNA 복합체를 의미합니다.
                                    이는 일반적으로 인체 세포에도 존재하는 물질이며, 특정 규격의 DNA 분절체(조)라고 보시면 되시고,
                                    쉽게 이해하면 "항염 효과, 세포증식, 조직재생의 효과를 나타내는 DNA 조각"이라고 생각하시면 좋습니다.
                                </p>
                            </Block>
                            <Block>
                                <p>
                                    PDRN 주사는 임상에서 크게 3가지 영역에서 많이 사용되는데, 첫 번째는 화상 상처나 욕창,
                                    당뇨 발 치료 등의 난치성 상처의 재생 치료에 이용되고, 두 번째로는 피부 미용 영역에서 메조테라피 등에서 활용되고 있습니다.
                                    마지막으로는 통증 치료 영역에서 통증 주사 시술로 프롤로테라피 등과 병행하여 이용되고 있습니다.
                                </p>
                            </Block>
                            <Block>
                                <p>
                                    PDRN을 이용한 인대 증식술은 결합 조직이 약화된 부위에 증식제를 주입함으로써 조직의 치유 싸이클을
                                    활성화시켜서 조직 내부의 성장인자(growth factor)의 분비를 촉진하여 정상 섬유아세포(Fibroblast)
                                    활성을 유도하고 조직을 증식시켜 강화시키는 재생 치료법입니다.
                                    DNA 주사는 손상된 힘줄, 근육, 연골의 세포 재생 단계에서부터 영향을 주기 때문에 일반적인 프롤로 테라피에 비해서
                                    더 신속하고 확실한 재생 효과를 볼 수 있는 장점이 있습니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="shockwave">
                        <Container>
                            <Block>
                                <Heading size={3}>체외충격파 치료</Heading>
                            </Block>
                            <Block>
                                <p>
                                    체외충격파 치료는 대표적인 관절, 인대, 근육에 대한 비수술 치료법 중 하나로, 통증 부위와 근골격계 조직 부위에 강력한 파동 에너지를 출력하여 병변 부위에 혈류량 증가와 혈관 재형성을 촉진하고, 주위 조직과 골절의 치유 과정을 자극하고 재활성화시켜 통증 감소 및 기능을 개선시키는 치료법입니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">장점</Heading>
                            </Block>
                            <Block>
                                <ul>
                                    <li>치료 기간이 짧고 외래 진료가 가능합니다.</li>
                                    <li>부작용 및 합병증이 거의 없습니다.</li>
                                    <li>치료 후 일상 생활이 바로 가능합니다.</li>
                                    <li>3-4회의 반복적인 시술이 가능합니다.</li>
                                </ul>
                            </Block>
                            <Block>
                                <Heading size={5} subtitle renderAs="h3">적응증</Heading>
                            </Block>
                            <Block>
                                <ul>
                                    <li>회전근개 손상, 석회성 건염, 충돌 증후군, 어깨 주위 인대염 등 어깨 통증이 있는 경우</li>
                                    <li>테니스 엘보, 골퍼 엘보 등 팔꿈치나 손목 통증이 있는 경우</li>
                                    <li>무릎 주위 인대염, 무릎 관절염 등 무릎 통증이 있는 경우</li>
                                    <li>족저근막염, 아킬레스 인대염, 발목 인대손상 등 발목 통증이 있는 경우</li>
                                </ul>
                            </Block>
                        </Container>
                    </Section>
                </Columns.Column>
            </Columns>
        </Layout>
    );
}
