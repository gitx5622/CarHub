import {Carousel} from "antd";
import Image from "next/image";
import React from "react";
import CarouselPic from "../assets/carousal.jpg";
import imageLoader from "./imageLoader";
import styled from "styled-components";

const Container: React.CSSProperties = {
    marginTop: '60px',
    position: "relative",
    textAlign: "center",
    color: "white",
};

const Centered = styled.div`
  font-family: Quicksand, sans-serif;
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 26px;
  color: white;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Heading: React.CSSProperties = {
    color: "white",
    lineHeight: 2,

};

const CarouselAuto: React.FC = () => (
    <Carousel autoplay dots={false}>
        <div>
            <div style={Container}>
                <Image
                    src={CarouselPic}
                    loader={imageLoader}
                    unoptimized
                    alt="carousel-pic-one"
                    width={1500}
                    height={400}
                    style={{filter: "brightness(70%)"}}
                />
                <Centered>
                    <h2 style={Heading}>
                        Find Popular brands and Cars available for sale on CarHub
                    </h2>
                </Centered>
            </div>
        </div>
        <div>
            <div style={Container}>
                <Image
                    src={CarouselPic}
                    loader={imageLoader}
                    unoptimized
                    alt="carousel-pic-two"
                    width={1500}
                    height={400}
                    style={{filter: "brightness(70%)"}}
                />
                <Centered>
                    <h2 style={Heading}>Find Popular brands</h2>
                </Centered>
            </div>
        </div>
    </Carousel>
);

export default CarouselAuto;
