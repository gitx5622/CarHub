import React from "react";
import {Layout} from "antd";

const LogoDiv: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    color: "white",
    padding: '10px 20px',
    fontSize: '20px',
};

const NavBar: React.CSSProperties = {
    backgroundColor: "#1990ff",
    color: "white",
    height: "60px",
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
                    <div style={LogoDiv}>
                        <div>CarHub</div>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                        </div>
                        <div>Login</div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Navbar;
