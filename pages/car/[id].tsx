import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import {CarMediaList, CarMediaListResults, Cars,} from "../../components/types";
import Navbar from "../../components/navbar";
import {Card, Carousel, Col, Row, Tag} from "antd";
import {useRouter} from "next/router";
import Image from "next/image";
import imageLoader from "../../components/imageLoader";
import ReactPlayer from "react-player";

const {Meta} = Card;

const main: React.CSSProperties = {
    marginTop: "70px",
};

const Container: React.CSSProperties = {
    marginTop: "60px",
    position: "relative",
    textAlign: "center",
    color: "white",
};

const Centered: React.CSSProperties = {
    fontFamily: "Quicksand, sans-serif",
    position: "absolute",
    top: "8px",
    left: "16px",
    fontSize: "26px",
    color: "white",
};

const Heading: React.CSSProperties = {
    color: "white",
    lineHeight: 1,
};

const CarList: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: 3,
    borderBottom: "1px solid black",
};

const CarDetails = ({car}: { car: Cars }) => {
    const router = useRouter();
    const {id} = router.query;
    const [carMediaResults, setCarMediaResults] = useState<[] | CarMediaList[]>(
        []
    );

    useEffect(() => {
        const handleCarMediaList = async () => {
            const carMedia = await fetch(
                `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${id}`
            );
            const {carMediaList}: CarMediaListResults = await carMedia.json();
            setCarMediaResults(carMediaList);
        };
        handleCarMediaList();
    }, [id]);

    return (
        <div>
            <Navbar/>
            <Row gutter={[24, 24]}>
                <Col sm={24} md={12}>
                    <Card bordered hoverable style={{width: "100%"}}>
                        <Carousel dots={true}>
                            {carMediaResults?.map((carMedia) => (
                                <div key={carMedia.id}>
                                    {carMedia.type === "image/jpg" ? (
                                        <div style={Container}>
                                            <Image
                                                src={carMedia.url}
                                                loader={imageLoader}
                                                unoptimized
                                                alt="carousel-pic-one"
                                                width={800}
                                                height={450}
                                                style={{filter: "brightness(70%)"}}
                                            />
                                            <div style={Centered}>
                                                <h1 style={Heading}>{carMedia.name}</h1>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={main}>
                                            <ReactPlayer
                                                url={carMedia.url}
                                                playing={true}
                                                controls={true}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Carousel>
                        <div>
                            <h2>Brief Description:</h2>
                        </div>
                        <div>
                            <h3>
                                Market Price: <Tag color="#2db7f5">{car.marketplacePrice}</Tag>
                            </h3>
                            <h3>
                                Transmission: <Tag color="#2db7f5">{car.transmission}</Tag>
                            </h3>
                            <h3>
                                Fuel Type: <Tag color="#2db7f5">{car.fuelType}</Tag>
                            </h3>
                            <h4>
                                Website URL: <a href={car.websiteUrl}>{car.websiteUrl}</a>
                            </h4>
                        </div>
                    </Card>
                </Col>
                <Col sm={24} md={12}>
                    <Card hoverable style={{width: "99%", marginTop: "70px"}}>
                        <div>
                            <div style={CarList}>
                                <h2>Vehicle Description: {car.title}</h2>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        City: <Tag color="blue">{car.city}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        License Plate: <Tag color="cyan">{car.licensePlate}</Tag>
                                    </h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        Transmission: <Tag color="cyan">{car.transmission}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        MarketPlace Price:{" "}
                                        <Tag color="blue">
                                            {car.marketplacePrice < 100000
                                                ? `$ ${car.marketplacePrice}`
                                                : `Kshs ${car.marketplacePrice}`}
                                        </Tag>
                                    </h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        Year: <Tag color="blue">{car.year}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        Installments: <Tag color="cyan">{car.installment}</Tag>
                                    </h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        Fuel Type: <Tag color="cyan">{car.fuelType}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        Grade Score: <Tag color="blue">{car.gradeScore}</Tag>
                                    </h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        Sold:{" "}
                                        <Tag color={car.sold ? "red" : "green"}>{car.sold}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>State: {car.state}</h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        Mileage:{" "}
                                        <Tag color={car.mileage < 100000 ? "blue" : "red"}>
                                            {car.mileage}
                                        </Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        Mileage Unit: <Tag color="volcano">{car.mileageUnit}</Tag>
                                    </h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        3D Imaging: <Tag color="blue">{car.hasThreeDImage}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        Warranty: <Tag color="cyan">{car.hasWarranty}</Tag>
                                    </h3>
                                </div>
                            </div>
                            <div style={CarList}>
                                <div>
                                    <h3>
                                        Loan Value: <Tag color="blue">{car.loanValue}</Tag>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        Deposit Received:{" "}
                                        <Tag color="cyan">{car.depositReceived}</Tag>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://api.staging.myautochek.com/v1/inventory/car/${context.query.id}`
    );
    const car = await res.json();
    return {
        props: {
            car,
        },
    };
};

export default CarDetails;
