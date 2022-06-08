import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import CarouselPic from "../assets/carousal.jpg";
import imageLoader from "./imageLoader";

const CarouselAuto: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3>
        <Image src={CarouselPic} loader={imageLoader} unoptimized alt="carousel-pic-one" width={1500} height={360} />
      </h3>
    </div>
    <div>
      <h3>
        <Image src={CarouselPic} loader={imageLoader} unoptimized alt="carousel-pic-two" width={1500} height={360} />
      </h3>
    </div>
  </Carousel>
);

export default CarouselAuto;
