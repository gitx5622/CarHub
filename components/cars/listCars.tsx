import React from "react";
import { CarResults } from "../types";
import {Avatar, Card, Row, Col, Divider, Pagination, Tag} from 'antd';
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from 'styled-components';

const { Meta } = Card;

const style: React.CSSProperties = {paddingLeft: '2em'};

const ListAllCars = ({ result, pagination }: CarResults) => {
  return (
    <div>
        <HeaderDiv>
            <h1>Cars for Sale in Kenya:</h1>
            <h4>Results: {pagination.total}</h4>
        </HeaderDiv>
        <Divider/>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {result.map((car) => (
                        <div key={car.id}>
                            <div style={style}>
                        <Col className="gutter-row" span={6}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <Image
                                        src={car.imageUrl}
                                        loader={imageLoader}
                                        unoptimized
                                        alt={car.title}
                                        width={300} height={200}/>
                                }
                                actions={[
                                    <Tag key="fuel" color="cyan">${car.fuelType}</Tag>,
                                    <Tag key="city" color="blue">${car.city}</Tag>,
                                    <Tag key="installment" color="geekblue">${car.installment}</Tag>,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={car.imageUrl} />}
                                    title={car.title}
                                    description={car.transmission}
                                />
                            </Card><br/>
                        </Col>
                            </div>
                        </div>
                    ))}
            <Pagination defaultCurrent={pagination.currentPage} total={pagination.total} />
        </Row>
    </div>
  );
};

const HeaderDiv = styles.div`
    display: flex;
    justify-content: space-between;
    padding-left: 2em;
    padding-right: 2em;
    line-height: 0.5;
`;
export default ListAllCars;
