import { Drawer, Button, Card, Row, Col } from 'antd';
import { LeftOutlined, ArrowRightOutlined, DeleteOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import emptyCard from '../../images/empty-cart.png'

const getlocalStorage = () => {
  const items = localStorage.getItem("CartItems")
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
}

export const CartDrawer = ({ onClose, visible }) => {
  const storageCartItem = getlocalStorage();

  const footer = (
    <>
      <div className='mini-cart'>
        <p>Total</p>
        <p>Price Total</p>
      </div>
      <div className='checkout-buttons'>
        <Button style={{
          borderColor: 'coral',
          color: 'coral',
        }} ghost><Link to='/add-to-cart' onClick={onClose}>View Cart</Link></Button>
        <Button>Checkout<ArrowRightOutlined /></Button>
      </div >
    </>

  )

  return (
    <>
      <Drawer
        title="Continue Shoping"
        placement="right"
        onClose={onClose}
        visible={visible}
        closeIcon={<LeftOutlined style={{ color: 'white' }} />}
        footer={storageCartItem.length > 0 && footer}
        headerStyle={{
          background: 'coral',
        }}
        footerStyle={{
          background: '#fafafa'
        }}
      >
        <h3>Your Cart</h3>
        {storageCartItem.length === 0 && <div className='empty-cart'>
          <img src={emptyCard} alt='not found' />
        </div>}
        {storageCartItem.map((item, index) => (
          <Card className='mini-cart--card' key={index} style={{
            marginBottom: '2rem'
          }}>
            <Row justify='space-between'>
              <Col className='cart-first-column'>
                <div className='cart-image'><img src={item.image} alt='not found' /></div>
                <div>{item.name}</div></Col>
              <Col>{item.quantity}</Col>
              <Col>{item.price}</Col>
              <DeleteOutlined
                style={{ cursor: 'pointer', color: 'red' }}
              />
            </Row>
          </Card>
        ))}

      </Drawer>
    </>
  );
};
