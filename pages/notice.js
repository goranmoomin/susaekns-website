import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { Section, Heading, Container, Menu, Columns, Box, Element, Block, Table } from "react-bulma-components";

import Layout from "../components/layout";

export default function Notice() {
    return (
        <Layout>
            <Columns>
                <Columns.Column size={2} responsive={{ touch: { hide: { value: true } } }}>
                    <Box>
                        <Menu>
                            <Menu.List title="공지사항">
                                <Menu.List.Item href="#" renderAs={Link}>비급여진료</Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Box>
                </Columns.Column>
                <Columns.Column>
                    <Section>
                        <Container>
                            <Block><Heading size={3}>비급여진료</Heading></Block>
                            <Block>
                                <Table striped bordered hoverable>
                                    <thead>
                                        <tr>
                                            <th colspan={2}>항목</th>
                                            <th>가격 정보</th>
                                            <th rowspan={2}>특이 사항</th>
                                        </tr>
                                        <tr>
                                            <th>구분</th>
                                            <th>명칭</th>
                                            <th>금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan={5}>예방접종</td>
                                            <td>독감 (인플루엔자)</td>
                                            <td>40,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>파상풍 (Hypertet)</td>
                                            <td>35,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>TD 백신</td>
                                            <td>50,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>폐렴구균백신 (프리베나)</td>
                                            <td>130,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>대상포진백신(스카이조스터)</td>
                                            <td>150,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td rowspan={19}>치료재료</td>
                                            <td>평복대</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>OS 복대</td>
                                            <td>15,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>목발</td>
                                            <td>20,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>cast shose (신발)</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>팔걸이</td>
                                            <td>5,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>벨포 밴드</td>
                                            <td>20,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>토마스 칼라 (소프트 칼라)</td>
                                            <td>15,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>손목 지지대 (Support)</td>
                                            <td>23,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>발목 지지대 (Support)</td>
                                            <td>23,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>손목 밴드</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>발목 밴드</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Elbow 밴드 (팔꿈치)</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Knee 밴드 (무릎)</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>무릎 지지대 (support)</td>
                                            <td>23,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>허리 코르셋</td>
                                            <td>80,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>Thumb & finger Support (손가락)</td>
                                            <td>15,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>긴팔 보조기</td>
                                            <td>120,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>알루미늄 Splint</td>
                                            <td>3,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>개구리 Splint</td>
                                            <td>8,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td rowspan={4}>행위</td>
                                            <td>초음파</td>
                                            <td>30,000 ~ 100,000</td>
                                            <td>급여인정기준외</td>
                                        </tr>
                                        <tr>
                                            <td>인대강화 주사요법</td>
                                            <td>100,000 ~ 150,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>도수치료</td>
                                            <td>50,000 ~ 120,000</td>
                                            <td>시간, 부위에 따라서</td>
                                        </tr>
                                        <tr>
                                            <td>체외충격파</td>
                                            <td>50,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td rowspan={3}>주사제</td>
                                            <td>하이알라제 1A</td>
                                            <td>200,000 / vial</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>하이코민</td>
                                            <td>15,000 / vial</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>진코발주</td>
                                            <td>15,000 / vial</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td rowspan={15}></td>
                                            <td>일반진단서</td>
                                            <td>20,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>의사소견서</td>
                                            <td>20,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>진료확인서</td>
                                            <td>3,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>입•퇴원확인서</td>
                                            <td>3,000</td>
                                            <td>의무기록사본발급</td>
                                        </tr>
                                        <tr>
                                            <td>의무기록사본 (5장이하)</td>
                                            <td>1,000 / 1장</td>
                                            <td>의무기록사본발급</td>
                                        </tr>
                                        <tr>
                                            <td>의무기록사본 (5장이상)</td>
                                            <td>100 / 1장</td>
                                            <td>의무기록사본발급</td>
                                        </tr>
                                        <tr>
                                            <td>근로능력 평가서 (동사무소)</td>
                                            <td>10,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>장애진단서 (동사무소 제출용)</td>
                                            <td>15,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>후유장애 진단서 (보험사)</td>
                                            <td>100,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>채용신체검사서</td>
                                            <td>30,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>증명서 재발행</td>
                                            <td>1,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>진료비 추정서 (천만 미만)</td>
                                            <td>50,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>진료비 추정서 (천만 이상)</td>
                                            <td>100,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>상해진단서 (3주 미만)</td>
                                            <td>100,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>상해진단서 (3주 이상)</td>
                                            <td>150,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td rowspan={12}>주사제</td>
                                            <td>태반주사 (멜스몬)</td>
                                            <td>20,000 / vial</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>아노솔주</td>
                                            <td>40,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>비비에스주</td>
                                            <td>30,000 / 1회</td>
                                            <td>Vit B1</td>
                                        </tr>
                                        <tr>
                                            <td>블루밸런스</td>
                                            <td>50,000 / 1회</td>
                                            <td>뉴트리헥스포함</td>
                                        </tr>
                                        <tr>
                                            <td>비타민 D 주사(메리트디)</td>
                                            <td>30,000 / 1회</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>하이코민주</td>
                                            <td>15,000 / 1회</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>메가 비타민C</td>
                                            <td>30,000 / 1회</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>안티옥시주</td>
                                            <td>30,000 / 1회</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>유한 쓰리챔버 페리주</td>
                                            <td>80,000</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>영양수액제</td>
                                            <td>50,000 ~ 80,000</td>
                                            <td>수액 + 비타민 복합제제</td>
                                        </tr>
                                        <tr>
                                            <td>아세트펜프리믹스주</td>
                                            <td>30,000 / 1회</td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>원부펜프리믹스주</td>
                                            <td>40,000 / 1회</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Block>
                        </Container>
                    </Section>
                </Columns.Column>
            </Columns>
        </Layout>
    );
}
