import React from "react";
import { Layout } from "antd";

const LogoDiv: React.CSSProperties = {
  color: "white",
};

const NavBar: React.CSSProperties = {
  backgroundColor: "#1990ff",
  color: "white",
  height: "50px",
  position: "sticky",
  top: 0,
};

const LayoutStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
};

const Navbar: React.FC = () => {
  return (
    <div>
      <Layout style={LayoutStyle}>
        <div style={NavBar}>
          <div style={LogoDiv}>CarHub</div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
