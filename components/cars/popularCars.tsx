import React from "react";
import {PopularCarResults} from "../types";
import {Avatar, Card, Col, Divider, Row, Tag} from "antd";
import Link from "next/link";
import styled from "styled-components";

const {Meta} = Card;

const HeaderDiv: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "2em",
    paddingRight: "2em",
    lineHeight: "0.5",
    color: "#1990ff",
};

const StyleDiv = styled.div`
  padding-left: 3em;
  @media only screen and (max-width: 768px) {
    padding-left: 7em;
  }
`;

const TagDiv = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PopularCarsComponent = ({makeList, pagination}: PopularCarResults) => {
    return (
        <div>
            <div style={HeaderDiv}>
                <h1>Popular Car Brands: </h1>
                <TagDiv>
                    {makeList.map((make) => (
                        <Tag key={make.id} color="#108ee9">
                            {make.name}
                        </Tag>
                    ))}
                </TagDiv>
                <h2>Total brands: <Tag color="#108ee9">
                    {pagination.total}
                </Tag></h2>
            </div>
            <Divider/>
            <Row gutter={[16, 16]}>
                {makeList.map((car) => (
                    <StyleDiv key={car.id}>
                        <div>
                            <Col sm={24} md={6}>
                                <Card style={{minWidth: 300}}>
                                    <Link href={`/car/${car.id}`}>
                                        <Meta
                                            avatar={<Avatar src={car.imageUrl}/>}
                                            title={car.name}
                                        />
                                    </Link>
                                </Card>
                                <br/>
                            </Col>
                        </div>
                    </StyleDiv>
                ))}
            </Row>
        </div>
    );
};

export default PopularCarsComponent;
