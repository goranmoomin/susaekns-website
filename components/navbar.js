import React from "react";
import Link from "next/link";

import { Navbar } from "react-bulma-components";

// TODO: Find out why I have to call ref
let NavbarLink = React.forwardRef((props, ref) => <Navbar.Link {...props} domRef={ref()} />);
let NavbarItem = React.forwardRef((props, ref) => <Navbar.Item {...props} domRef={ref()} />);

export default function MyNavbar() {
    let [isNavbarActive, setIsNavbarActive] = React.useState(false);
    return (
        <Navbar active={isNavbarActive}>
            <Navbar.Brand>
                <Link href="/" passHref>
                    <NavbarItem>
                        <img src="/logo.jpeg" />
                        <div style={{ marginLeft: 8 }}>수색신경외과</div>
                    </NavbarItem>
                </Link>
                <Navbar.Burger onClick={() => setIsNavbarActive(isNavbarActive => !isNavbarActive)} />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item dropdown hoverable>
                        <Link href="/about" passHref>
                            <NavbarLink>병원소개</NavbarLink>
                        </Link>
                        <Navbar.Dropdown>
                            <Link href="/about#greeting" passHref>
                                <NavbarItem>인사말</NavbarItem>
                            </Link>
                            <Link href="/about#guide" passHref>
                                <NavbarItem>진료안내</NavbarItem>
                            </Link>
                            <Link href="/about#map" passHref>
                                <NavbarItem>오시는 길</NavbarItem>
                            </Link>
                            <Link href="/about#equipment" passHref>
                                <NavbarItem>시설 및 장비</NavbarItem>
                            </Link>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable>
                        <Link href="/spine" passHref>
                            <NavbarLink>척추질환</NavbarLink>
                        </Link>
                        <Navbar.Dropdown>
                            <Link href="/spine#cervical" passHref>
                                <NavbarItem>경추질환</NavbarItem>
                            </Link>
                            <Link href="/spine#lumbar" passHref>
                                <NavbarItem>요추질환</NavbarItem>
                            </Link>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable>
                        <Link href="/joint" passHref>
                            <NavbarLink>관절질환</NavbarLink>
                        </Link>
                        <Navbar.Dropdown>
                            <Link href="/joint#shoulder" passHref>
                                <NavbarItem>어깨</NavbarItem>
                            </Link>
                            <Link href="/joint#elbow-wrist" passHref>
                                <NavbarItem>팔꿈치 및 손목</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>무릎 및 족부</NavbarItem>
                            </Link>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable>
                        <Navbar.Link>뇌혈관질환</Navbar.Link>
                        <Navbar.Dropdown>
                            <Link href="/" passHref>
                                <NavbarItem>두통</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>어지럼증</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>치매</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>뇌졸증</NavbarItem>
                            </Link>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable>
                        <Navbar.Link>비수술적치료</Navbar.Link>
                        <Navbar.Dropdown>
                            <Link href="/" passHref>
                                <NavbarItem>C-arm 영상유도 척추시술</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>초음파유도 근골격시술</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>프롤로치료</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>DNA 인대증식치료</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>도수치료</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>
                                    특수운동치료 (수술 후 개인맞춤 재활운동)
                                </NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>식운동</NavbarItem>
                            </Link>
                            <Link href="/" passHref>
                                <NavbarItem>자가혈장치료(PRP)</NavbarItem>
                            </Link>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}
