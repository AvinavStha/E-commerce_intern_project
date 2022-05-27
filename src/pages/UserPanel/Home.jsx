import React from "react";
import { Card } from "antd";
import bottle from "../../images/1.png"
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/actions/actions";

const { Meta } = Card;

const Home = () => {
  const value = useSelector(state => state.incrementDecrement.count)
  console.log(value)
  const dispatch = useDispatch()

  return (
    <>
      <Card
        className='product-card'
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={bottle} />}
      >
        <Meta title="Scapa The Orcadian Glansa 750ML" />
        <div className="product-info">
          <div className="price-detail">
            <div>Price</div>
            <div>Rs.1050</div>
          </div>
          <div className="product-info">
            <Button type="text" onClick={() => { dispatch(decrement()) }}>-</Button>
            <input type="text" value={value} onChange={(e) => { console.log('dfdfs') }} />
            <Button type="text" onClick={() => { dispatch(increment()) }}>+</Button>
          </div>
        </div>

        <Button type="primary" block className="add-to-cart">Add to Cart</Button>
      </Card>
    </>
  );
};

export default Home;

