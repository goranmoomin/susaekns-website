import React from "react";
import Link from "next/link";

import { Navbar } from "react-bulma-components";

export default function MyNavbar() {
    let [isNavbarActive, setIsNavbarActive] = React.useState(false);
    return (
        <Navbar active={isNavbarActive}>
            <Navbar.Brand>
                <Navbar.Item href="/" renderAs={Link}>
                    <img src="/logo.jpeg" />
                    <div style={{ marginLeft: 8 }}>수색신경외과</div>
                </Navbar.Item>
                <Navbar.Burger onClick={() => setIsNavbarActive(isNavbarActive => !isNavbarActive)} />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item hoverable>
                        <Navbar.Link href="/about" renderAs={Link}>병원소개</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="/about#greeting" renderAs={Link}>인사말</Navbar.Item>
                            <Navbar.Item href="/about#guide" renderAs={Link}>진료안내</Navbar.Item>
                            <Navbar.Item href="/about#map" renderAs={Link}>오시는 길</Navbar.Item>
                            <Navbar.Item href="/about#equipment" renderAs={Link}>시설 및 장비</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item hoverable>
                        <Navbar.Link href="/spine" renderAs={Link}>척추질환</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="/spine#cervical" renderAs={Link}>경추질환</Navbar.Item>
                            <Navbar.Item href="/spine#lumbar" renderAs={Link}>요추질환</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item hoverable>
                        <Navbar.Link href="/joint" renderAs={Link}>관절질환</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="/joint#shoulder" renderAs={Link}>어깨</Navbar.Item>
                            <Navbar.Item href="/joint#elbow-wrist" renderAs={Link}>팔꿈치 및 손목</Navbar.Item>
                            <Navbar.Item href="/joint#knee-foot" renderAs={Link}>무릎 및 족부</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item hoverable>
                        <Navbar.Link href="#" renderAs={Link}>뇌혈관질환</Navbar.Link>
                        <Navbar.Dropdown>
                            <Link href="#" passHref legacyBehavior>
                                <Navbar.Item href="#" renderAs={Link}>두통</Navbar.Item>
                            </Link>
                            <Link href="#" passHref legacyBehavior>
                                <Navbar.Item href="#" renderAs={Link}>어지럼증</Navbar.Item>
                            </Link>
                            <Link href="#" passHref legacyBehavior>
                                <Navbar.Item href="#" renderAs={Link}>치매</Navbar.Item>
                            </Link>
                            <Link href="#" passHref legacyBehavior>
                                <Navbar.Item href="#" renderAs={Link}>뇌졸증</Navbar.Item>
                            </Link>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item hoverable>
                        <Navbar.Link href="#" renderAs={Link}>비수술적치료</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#" renderAs={Link}>C-arm 영상유도 척추시술</Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>초음파유도 근골격시술</Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>프롤로치료</Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>DNA 인대증식치료</Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>도수치료</Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>
                                특수운동치료 (수술 후 개인맞춤 재활운동)
                            </Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>식운동</Navbar.Item>
                            <Navbar.Item href="#" renderAs={Link}>자가혈장치료(PRP)</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}
