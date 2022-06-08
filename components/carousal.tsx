import { Button, Carousel } from "antd";
import Image from "next/image";
import React from "react";
import CarouselPic from "../assets/carousal.jpg";
import imageLoader from "./imageLoader";

const Container: React.CSSProperties = {
  position: "relative",
  textAlign: "center",
  color: "white",
};

const Centered: React.CSSProperties = {
  position: "absolute",
  top: "8px",
  left: "16px",
  fontSize: "34px",
  color: "white",
};

const Heading: React.CSSProperties = {
  color: "white",
  lineHeight: 1,
};

const CarouselAuto: React.FC = () => (
  <Carousel autoplay>
    <div>
      <div style={Container}>
        <Image
          src={CarouselPic}
          loader={imageLoader}
          unoptimized
          alt="carousel-pic-one"
          width={1500}
          height={400}
          style={{ filter: "brightness(70%)" }}
        />
        <div style={Centered}>
          <h1 style={Heading}>
            Find Popular brands and Cars available for sale on CarHub
          </h1>
          <Button type="primary">Welcome to CarHub</Button>
        </div>
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
          style={{ filter: "brightness(70%)" }}
        />
        <div style={Centered}>
          <h1 style={Heading}>Find Popular brands</h1>
          <Button type="primary">Welcome to CarHub</Button>
        </div>
      </div>
    </div>
  </Carousel>
);

export default CarouselAuto;
