import React from "react";
import { Card } from "antd";
import bottle from "../images/1.png"

const { Meta } = Card;

const Home = () => {
  return (
    <>
      <p>Home</p>
      <Card
        className='product-card'
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={bottle} />}
      >
        <Meta title="Scapa The Orcadian Glansa 750ML" description="Rs. 1050" />
      </Card>
    </>
  );
};

export default Home;
