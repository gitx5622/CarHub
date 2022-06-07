import React from "react";
import { Layout } from "antd";
import styles from "styled-components";

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <div>
      <Layout>
        <NavBar>
          <LogoDiv>
            CarHub
          </LogoDiv>
        </NavBar>
      </Layout>
    </div>
  );
};

const LogoDiv = styles.div`
    color: white
`;

const NavBar = styles(Header)`
    background-color: #1a7bc8;
    color: white
`;

export default Navbar;
