import Link from "next/link";

import { Section, Heading, Container, Menu, Columns, Box, Block, Content } from "react-bulma-components";

import Layout from "../components/layout";

export default function Cerebrovascular() {
    return (
        <Layout>
            <Columns>
                <Columns.Column size={2} responsive={{ touch: { hide: { value: true } } }}>
                    <Box>
                        <Menu>
                            <Menu.List title="뇌혈관질환">
                                <Menu.List.Item href="#headache" renderAs={Link}>두통</Menu.List.Item>
                                <Menu.List.Item href="#dizziness" renderAs={Link}>어지럼증</Menu.List.Item>
                                <Menu.List.Item href="#dementia" renderAs={Link}>치매</Menu.List.Item>
                                <Menu.List.Item href="#stroke" renderAs={Link}>뇌졸증</Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Section id="headache">
                        <Container>
                            <Block>
                                <Heading size={3}>두통</Heading>
                            </Block>
                            <Block>
                                <p>
                                    두통은 이마에서부터 관자놀이, 후두부, 뒷목 등을 포함하는 부위에 통증이 발생하는 것을 말하는데
                                    모든 사람들이 일생 동안 한두 번 이상은 경험하는 증상입니다.
                                    MRI, CT 등의 검사를 통해서도 이상 소견이 보이지 않으나 통증을 겪는 것을 일차성 두통,
                                    기질적인 원인이 있는 경우를 이차성 두통으로 구분하고 있으며, 일차성 두통은 임상적인 진단 외
                                    특이적인 진단 방법이 없는 만큼 해당 의사의 임상 경험이 중요하게 작용합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">두통의 원인</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <ul>
                                        <li>측두동맥염, 근막동통 증후군, 약물과용, 뇌종양, 뇌출혈, 뇌압 상승, 뇌수막염 등의 기저 질환</li>
                                        <li>과도한 스트레스, 만성 피로, 수면 부족 등의 주변 환경 및 심리적 요인</li>
                                    </ul>
                                    <p>
                                        두통의 원인은 수백 가지에 이를 만큼 다양하므로 통증을 유발하는 원인에 따라 각기 다른 증상이 동반될 수 있으며,
                                        통증의 양상이 박동성을 띠거나 조이는 느낌 등으로 광범위한 반면 환자에 따라 표현하는 방식이 다른 만큼 구분에 어려움이 따를 수 있습니다.
                                    </p>
                                </Content>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">두통의 종류</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <ol>
                                        <li>
                                            경추성 두통: 경추 관절 사이 추간판 돌출로 척수 신경이 압박을 받아 두통을 유발하게 되는데
                                            근육과 인대 등 주변 연부조직까지 영향을 받아 관절, 근육 통증이 동반됩니다.
                                        </li>
                                        <li>
                                            긴장성 두통: 스트레스, 피로 등 주변 환경 및 심리적 요인에 의해 유발 또는 악화되는 것으로 알려졌으나
                                            정확한 원인은 밝혀지지 않았으며 어깨 주변 통증이 동반될 수 있습니다.
                                        </li>
                                        <li>
                                            편두통: 뇌의 기능적 변화, 삼차신경과 주변 혈관 염증 반응 등 여러 가설이 제기되고 있으나
                                            정확한 원인은 밝혀지지 않았으며 두통 발생 전 광과민성, 시각 장애, 소화불량 등 전조증상이 동반되기도 합니다.
                                        </li>
                                        <li>
                                            군발두통: 삼차자율신경두통의 한 종류로 눈으로 가는 통각수용기에 의한 뇌부교감신경반사의 과도한 활성화로
                                            두통이 유발되며 충혈, 눈물, 코막힘, 콧물, 땀 등 증상이 동반될 수 있습니다.
                                        </li>
                                    </ol>
                                </Content>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="dizziness">
                        <Container>
                            <Block>
                                <Heading size={3}>어지럼증</Heading>
                            </Block>
                            <Block>
                                <p>
                                    현기증으로도 불리는 어지럼증은 자신이나 주위 사물이 정지해 있음에도 불구하고 움직이는 듯한 느낌을 받는 모든 증상을 통칭하는 용어입니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">어지럼증의 종류</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <ol>
                                        <li>
                                            현훈 (Vertigo)
                                            <p>
                                                전정 기관에 문제가 생긴 경우 생기는 어지러움. 귀 내부에 자리한 전정 기관에는 미세한
                                                이석이라는 입자가 존재해서 이것이 움직임에 의해 이동하며 전정 기관의 신경들을 건드려 위치 감각을 소뇌에 전달합니다.
                                                간혹 이석이 원래 있을 곳을 빠져나와 전정 기관 어딘가에 걸려서 계속 신경을 건드리게 되면 현훈
                                                (양성자세현훈, 이석증)이 생기게 됩니다. 주변의 사물이 빙글빙글 돌아가는 듯한 느낌
                                                (Spinning sensation)이 특징적입니다.
                                            </p>
                                            <p>
                                                중추성 현훈과 말초성 현훈이 있으며 치료에 있어서는 이 둘 중 어느 증상에 해당하는지
                                                정확하게 판별해내는 것이 중요합니다.
                                            </p>
                                            <ul>
                                                <li>
                                                    중추성 현훈 (central vertigo)은 증상이 점진적으로 나타나게 되며, 소뇌 (cerebellum)와 관련된 다른 증상이 보여집니다.
                                                    소뇌와 관련된 증상으로는 무기력증, 편측 마비 (hemiplegia), 복시 (diplopia), 삼킴 곤란 (dysphagia) 등이 보여집니다.
                                                    특히 수직 안진 (vertical nystagmus)이 특징적으로 나타나게 되며, 이는 말초성 현훈에서는 보여지지 않는 증상입니다.
                                                    주로 심혈관 (cardiovascular)과 관련된 경우가 많습니다.
                                                    중추성과 말초성을 구분하기 힘들 경우 뇌 MRI의 촬영을 통해 뇌졸중의 유무를 확인하게 됩니다.
                                                    그 외 다발성 경화증 (MS) 및 척추뇌저동맥부전 (vertebrobasilar insufficiency) 등으로 인해 발생하기도 합니다.
                                                </li>
                                                <li>
                                                    말초성 현훈 (peripheral vertigo)은 달팽이관 (cochlear)과 관련된 질병으로,
                                                    증상이 갑자기 나타나게 되며, 중추성 현훈과 관련된 증상이 보여지지 않습니다.
                                                    종류는 다음과 같습니다.
                                                    <ul>
                                                        <li>
                                                            양성체위성현훈 (benign positional vertigo): 이석증이라는 이름으로 잘 알려져 있습니다.
                                                            어떤 특징적인 자세나 움직일 때 어지럼즘이 잠시 동안 급작스럽게 나타나면, 이 질병을 의심하게 됩니다.
                                                            또한 수평 안진 (horizontal nystagmus)이 보여집니다.
                                                            특이하게, 대부분의 말초성 현훈 질병에서 보여지는 이명과 청력 손실은 나타나지 않습니다.
                                                            주로 60대 이상의 환자에게서 자주 보여지며, 치료는 항콜리널직/항히스타민제인 메클리진
                                                            (meclizine)을 통해 증상을 완화하게 됩니다.
                                                        </li>
                                                        <li>
                                                            메니에르병 (Meniere disease)은 어지럼증, 이명 (tinnitus) 및 청력 손실
                                                            (hearing loss)이 동반되는 질병입니다.
                                                            몇 시간에서 며칠간 증상이 지속되기도 하며, 1년에 몇 달간 증상이 나타나게 됩니다.
                                                            치료하지 않을 경우 영구적인 청력 손실이 동반되게 됩니다.
                                                            치료는 나트륨 제한 (sodium restriction)과 이뇨제 (diuretics)를 통해 증상을 완화하게 됩니다.
                                                        </li>
                                                        <li>
                                                            그 외에도 급성내이염 (acute labyrinthitis), 내이신경 독성의 약물
                                                            (ototoxic drugs), 청신경종 (acoustic neuroma) 등에서도 나타납니다.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            평형장애 (Disequilibrium)
                                        </li>
                                        <li>
                                            전실신 (실신 임박 상태의 어지러움, Presyncope)
                                        </li>
                                        <li>
                                            신경정신적 어지럼증 (Psychophysiologic dizziness)
                                        </li>
                                        <li>
                                            저혈당성 어지럼증 (Hypoglycemic dizziness)
                                        </li>
                                    </ol>
                                </Content>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="dementia">
                        <Container>
                            <Block>
                                <Heading size={3}>치매 (Dementia)</Heading>
                            </Block>
                            <Block>
                                <p>
                                    치매는 뇌의 인지 기능 장애로 인해 일상 생활을 스스로 유지하지 못하는 상태, 혹은 그러한 질병을 말합니다.
                                    치매관리법 제2조 제1호에서는 치매를 '퇴행성 뇌질환 또는 뇌혈관계 질환 등으로 인하여 기억력, 언어능력,
                                    지남력(指南力), 판단력 및 수행능력 등의 기능이 저하됨으로써 일상 생활에서 지장을 초래하는 후천적인 다발성 장애'로 정의합니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">치매의 종류</Heading>
                            </Block>
                            <Block>
                                <p>
                                    치매의 가장 흔한 형태는 알츠하이머 치매이며 이는 전체 치매 케이스의 50%에서 70% 정도를 차지합니다.
                                    또 다른 종류의 치매로는 혈관성 치매 (25%), 레비소체병 (15%), 그리고 이마관자엽 치매가 있습니다.
                                    비교적 흔하지 않은 원인들로는 수두증, 파킨슨병, 매독, 그리고 크로이츠펠트-야코프병 등이 있습니다.
                                    한 환자에게서 한 가지 이상의 치매 형태들이 나타날 수 있습니다.
                                    진단은 다른 가능성들을 배제하기 위하여 주로 의학적 imaging과 혈액검사와 함께 인지 검사 등을 통해 이루어집니다.
                                    흔하게 사용되는 인지기능 검사는 간단하게 진행할 수 있는 정신 건강 검사 (mini mental state examination)입니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                    <Section id="stroke">
                        <Container>
                            <Block>
                                <Heading size={3}>뇌졸증 (Stroke)</Heading>
                            </Block>
                            <Block>
                                <p>
                                    뇌졸중은 뇌혈류 이상으로 인해 갑작스레 유발된 국소적인 신경학적 결손 증상을 통칭하는 말입니다.
                                    뇌졸중은 증상에 대한 용어로서, 의학적인 질병으로 칭할 때에는 뇌혈관 질환
                                    (腦血管疾患, cerebrovascular accident, 줄여서 CVA)이라고 합니다.
                                    미국에서는 cerebrovascular stroke라고 합니다.
                                    한의학적인 표현을 빌려, 흔히 중풍 (中風)이라고 부르기도 하지만, 중풍이라는 말은 좀 더 광의의 표현입니다.
                                    뇌졸중은 크게 뇌경색과 뇌출혈로 분류됩니다.
                                </p>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">위험인자</Heading>
                            </Block>
                            <Block>
                                <Content>
                                    <p>
                                        뇌졸중의 위험인자는 다양합니다. 이를 불변성 인자와 그 외의 인자로 나누면 아래와 같습니다.
                                    </p>
                                    <ul>
                                        <li>불변성 인자: 고령, 남성, 뇌졸중의 가족력, 아프리카, 아시아계 인종, 혈액형 AB형</li>
                                        <li>
                                            그 외의 인자: 일과성 허혈성 발작이나 뇌졸중의 병력, 고혈압, 관상동맥 협착, 당뇨병,
                                            흡연, 심근 경색, 심방 세동, 울혈성 심부전의 병력, 좌심실 부전, 과도한 알코올 섭취, 혈액학적 이상,
                                            혈액응고질환, 클라미디아 및 치은염 감염
                                        </li>
                                    </ul>
                                </Content>
                            </Block>
                            <Block>
                                <Heading size={4} subtitle renderAs="h2">예방</Heading>
                            </Block>
                            <Block>
                                <p>
                                    뇌졸중은 사망률이 높고, 치료에 많은 비용과 시간이 들어가며, 치료한다고 하여도 장애를 남기기 쉬운 질환이기 때문에 예방이 중요합니다.
                                    예방은 가변적 위험 인자로부터 멀어지는 쪽으로 생활 습관을 바꾸는 것이 원칙입니다.
                                    이를테면, 혈압 관리, 금연, 체중 관리, 운동 등이 뇌졸중의 위험인자로부터 피하는 중요한 방법이 될 수 있습니다.
                                    또한, 심혈관계 질환을 미리 인지하고 치료하고, 혈중 콜레스테롤 농도를 낮추어야 합니다.
                                    경동맥 협착과 심방 세동에 대한 검사를 수행하여 이러한 질환으로 인한 뇌졸중을 미연에 방지하는 것이 좋습니다.
                                </p>
                            </Block>
                        </Container>
                    </Section>
                </Columns.Column>
            </Columns>
        </Layout>
    );
}
