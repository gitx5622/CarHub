import React from "react";
import {Layout} from "antd";
import Logo from '../assets/logo.png';
import Image from "next/image";
import imageLoader from "./imageLoader";
import styled from 'styled-components';
import Link from "next/link";

const LogoContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    padding: "10px 20px",
    fontSize: "20px",
};

const LogoDiv: React.CSSProperties = {
    display: "flex",
};

const NavBar: React.CSSProperties = {
    backgroundColor: "#1990ff",
    color: "white",
    height: "70px",
};

const LayoutStyle: React.CSSProperties = {
    fontFamily: 'Quicksand, sans-serif',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 10,
};

const ListDiv = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;


const Navbar: React.FC = () => {
    return (
        <div>
            <Layout style={LayoutStyle}>
                <div style={NavBar}>
                    <div style={LogoContainer}>
                        <Link href='/'><a>
                            <div style={LogoDiv}>
                                <Image
                                    src={Logo}
                                    loader={imageLoader}
                                    unoptimized
                                    alt="Logo"
                                    width={80}
                                    height={10}
                                />
                                <h1 style={{color: 'white'}}>CarHUB</h1>
                            </div>
                        </a></Link>
                        <ListDiv>
                            <ul>
                                <li>All Cars</li>
                                <li>Popular Cars</li>
                                <li>Brands</li>
                            </ul>
                        </ListDiv>
                        <ListDiv>
                            <ul>
                                <li>Register</li>
                                <li>Login</li>
                            </ul>
                        </ListDiv>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Navbar;
