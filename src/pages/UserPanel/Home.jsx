import React, { useEffect } from "react";
import { Col, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "./Slider";
import { getProduct } from '../../redux/actions/productActions';
import ProductCard from "./ProductCard";
import { HomeContent } from "./HomeContent";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons'

const Home = () => {
  const { product_details, loading } = useSelector(state => state.productReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])


  return (
    <>
      <Slider />
      {loading ?
        <Spin size='large' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} /> :
        <div className="product">
          <>
            <h2>Featured Products</h2>
            <Row>
              {product_details.filter(item => item.type === 'imported').map((product, index) =>
                index < 4 && (
                  <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    < ProductCard
                      product={product}
                    />
                  </Col>
                ))}
            </Row>
            <div className="link">
              <Link to='/feature-product'>View all<ArrowRightOutlined style={{ paddingLeft: '.6rem' }} /></Link>
            </div>
          </>

          {HomeContent.map((items, index) => (
            <div key={index}>
              <h2 style={{ marginTop: '4rem' }}>{items.title}</h2>
              <Row justify="space-between">
                {product_details.filter(item => item.brand === `${items.brand}`).map((product, index) =>
                  index < 4 && (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                      < ProductCard
                        product={product}
                      />
                    </Col>
                  ))}
              </Row>
              <div className="link">
                <Link to={items.link}>View all<ArrowRightOutlined style={{ paddingLeft: '.6rem' }} /></Link>
              </div>
            </div>
          ))}

        </div>
      }
    </>
  );
};

export default Home;

