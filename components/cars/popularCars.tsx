import React from "react";
import {PopularCarResults} from "../types";
import {Avatar, Card, Row, Col, Divider, Pagination, Tag} from 'antd';
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

const PopularCarsComponent = ({ makeList, pagination }: PopularCarResults) => {
    return (
        <div>
            <div style={HeaderDiv}>
                <h1>Cars for Sale in Kenya:</h1>
                <h4>Results: {pagination.total}</h4>
            </div>
            <Divider/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {makeList.map((car) => (
                    <div key={car.id}>
                        <div style={style}>
                            <Col className="gutter-row" span={6}>
                                <Card
                                    style={{ width: 300 }}
                                >
                                    <Link href={`/car/${car.id}`}>
                                        <Meta
                                            avatar={<Avatar src={car.imageUrl} />}
                                            title={car.name}
                                        />
                                    </Link>
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

export default PopularCarsComponent;
