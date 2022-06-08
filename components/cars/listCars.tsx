import React from "react";
import { CarResults } from "../types";
import {Avatar, Card, Row, Col, Divider, Pagination, Tag, Button} from 'antd';
import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from 'styled-components';
import Link from "next/link";

const { Meta } = Card;

const HeaderDiv: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '2em',
    paddingRight: '2em',
    lineHeight: '0.5',

};

const style: React.CSSProperties = {
    paddingLeft: '2em'

};

const ListAllCars = ({ result, pagination }: CarResults) => {
  return (
    <div>
        <div style={HeaderDiv}>
            <h1>Cars for Sale in Kenya:</h1>
            <h4>Results: {pagination.total}</h4>
        </div>
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
                                    <Tag key="fuel" color="cyan">{car.fuelType}</Tag>,
                                    <Tag key="city" color="blue">{car.city}</Tag>,
                                    <Tag key="installment" color="geekblue">{car.transmission}</Tag>,
                                ]}
                            >
                                    <Meta
                                        avatar={<Avatar src={car.imageUrl} />}
                                        title={car.title}
                                        description={`Amount:   ${car.marketplacePrice < 100000 ?
                                            `$ ${car.marketplacePrice}` : `Kshs ${car.marketplacePrice}`}`}
                                    /><br/>
                                <Button type="primary" block color="blue" href={`/car/${car.id}`}>View Model</Button>
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

export default ListAllCars;
