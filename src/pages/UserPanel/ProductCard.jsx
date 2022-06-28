import React from 'react'
import { Card, Button } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increaseCart, increment } from "../../redux/actions/actions"
import { toast } from 'react-toastify';
import { itemToCart } from '../../redux/actions/productActions';

const { Meta } = Card;

export default function ProductCard({ product }) {
    const { count, index } = useSelector(state => state.incrementDecrement)
    const { cart_item } = useSelector(state => state.productReducer)

    const { image, name, price } = product
    const dispatch = useDispatch()
    return (
        <Card
            className='product-card'
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={image} />}
        >
            <Meta title={name} />
            <div className="product-info">
                <div className="price-detail">
                    <div>Price</div>
                    <div>{price}</div>
                </div>
                <div className="product-info">
                    <Button type="text" onClick={() => { dispatch(decrement()) }}>-</Button>
                    <input type="text" value={count} onChange={(e) => { console.log('dfdfs') }} />
                    <Button type="text" onClick={() => { dispatch(increment()) }}>+</Button>
                </div>
            </div>

            <Button type="primary" block
                className="add-to-cart"
                onClick={() => {
                    localStorage.setItem("CartItemCount", JSON.stringify(index))
                    dispatch(increaseCart())
                    const item = [...cart_item, product]
                    dispatch(itemToCart(item))
                    localStorage.setItem("CartItems", JSON.stringify(item))
                    toast.success("Product added to cart", {
                        icon: "😄"
                    });
                }}
            >Add to Cart</Button>
        </Card >
    )
}
