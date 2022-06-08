import React from "react";
import { PopularCarResults } from "../types";
import { Avatar, Card, Col, Divider, Row, Tag } from "antd";
import Link from "next/link";

const { Meta } = Card;

const HeaderDiv: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "2em",
  paddingRight: "2em",
  lineHeight: "0.5",
  color: "#1990ff",
};

const style: React.CSSProperties = {
  paddingLeft: "2em",
};

const PopularCarsComponent = ({ makeList, pagination }: PopularCarResults) => {
  return (
    <div>
      <div style={HeaderDiv}>
        <h1>Popular Car Brands: </h1>
        <div>
          {makeList.map((make) => (
            <Tag key={make.id} color="#108ee9">
              {make.name}
            </Tag>
          ))}
        </div>
        <h1>Total brands: {pagination.total}</h1>
      </div>
      <Divider />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {makeList.map((car) => (
          <div key={car.id}>
            <div style={style}>
              <Col className="gutter-row" span={6}>
                <Card style={{ width: 300 }}>
                  <Link href={`/car/${car.id}`}>
                    <Meta
                      avatar={<Avatar src={car.imageUrl} />}
                      title={car.name}
                    />
                  </Link>
                </Card>
                <br />
              </Col>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default PopularCarsComponent;
