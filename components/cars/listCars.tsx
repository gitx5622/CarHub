import React from "react";
import {CarResults} from "../types";
import {Avatar, Button, Card, Col, Divider, Input, Row, Tag} from "antd";
import Image from "next/image";
import imageLoader from "../imageLoader";
import styled from "styled-components";

const {Meta} = Card;

const HeaderDiv: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "2em",
    paddingRight: "2em",
    lineHeight: "0.5",
};

const StyleDiv = styled.div`
  padding-left: 3em;
  @media only screen and (max-width: 768px) {
    padding-left: 7em;
  }
`;

const SearchDiv = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListAllCars = ({result, pagination}: CarResults) => {
    return (
        <div>
            <div style={HeaderDiv}>
                <h1>Cars for Sale in Kenya:</h1>
                <SearchDiv>
                    <Input.Group>
                        <Input
                            style={{
                                width: "550px",
                                borderTopLeftRadius: "20px",
                                borderBottomLeftRadius: "20px",
                            }}
                            size="large"
                            placeholder="https://ant.design"
                        />
                        <Button
                            type="primary"
                            style={{
                                borderTopRightRadius: "20px",
                                borderBottomRightRadius: "20px",
                            }}
                            size="large"
                        >
                            Search
                        </Button>
                    </Input.Group>
                </SearchDiv>
                <SearchDiv>
                    Total Cars: <Tag color="#108ee9">{pagination?.total}</Tag>
                </SearchDiv>
            </div>
            <Divider/>
            <Row gutter={[16, 16]}>
                {result?.slice(1, result.length - 3).map((car) => (
                    <div key={car.id}>
                        <StyleDiv>
                            <Col className="gutter-row" sm={24} md={6}>
                                <Card
                                    style={{
                                        width: 300,
                                        border: "1px solid #1990ff",
                                        fontFamily: "Quicksand, sans-serif",
                                    }}
                                    cover={
                                        <Image
                                            src={car.imageUrl}
                                            loader={imageLoader}
                                            unoptimized
                                            alt={car.title}
                                            width={300}
                                            height={200}
                                        />
                                    }
                                    actions={[
                                        <Tag
                                            style={{marginLeft: "-20px"}}
                                            key="installment"
                                            color="geekblue"
                                        >
                                            {car.transmission}
                                        </Tag>,
                                        <Tag
                                            style={{marginLeft: "-20px"}}
                                            key="city"
                                            color="blue"
                                        >
                                            {car.city}
                                        </Tag>,
                                        <Tag
                                            style={{marginLeft: "-20px"}}
                                            key="fuel"
                                            color="cyan"
                                        >
                                            {car.fuelType}
                                        </Tag>,
                                    ]}
                                >
                                    <Meta
                                        avatar={<Avatar src={car.imageUrl}/>}
                                        title={car.title}
                                        description={`Amount:   ${
                                            car.marketplacePrice < 100000
                                                ? `$ ${car.marketplacePrice}`
                                                : `Kshs ${car.marketplacePrice}`
                                        }`}
                                    />
                                    <br/>
                                    <Button
                                        type="primary"
                                        block
                                        color="blue"
                                        href={`/car/${car.id}`}
                                    >
                                        View Model
                                    </Button>
                                </Card>
                                <br/>
                            </Col>
                        </StyleDiv>
                    </div>
                ))}
            </Row>
        </div>
    );
};

export default ListAllCars;
