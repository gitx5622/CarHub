import React from "react";
import { CarResults } from "../types";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Card, Row, Col} from 'antd';
import Image from "next/image";
import imageLoader from "../imageLoader";

const { Meta } = Card;

const style: React.CSSProperties = {padding: '8px 0', marginLeft:'2em' };

const ListAllCars = ({ result, pagination }: CarResults) => {
  return (
    <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {result.map((car) => (
                        <div key={car.id}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
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
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={car.imageUrl} />}
                                    title={car.title}
                                    description={car.websiteUrl}
                                />
                            </Card>
                        </div>
                        </Col>
                        </div>
                    ))}
        </Row>
    </div>
  );
};
export default ListAllCars;
