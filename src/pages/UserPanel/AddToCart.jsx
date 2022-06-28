import React from 'react'
import { Table, Button, Typography } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../redux/actions/actions"
import { DeleteOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import emptyCard from '../../images/empty-cart.png'

const { Text } = Typography

const getlocalStorage = () => {
    const items = localStorage.getItem("CartItems")
    if (items) {
        return JSON.parse(items);
    } else {
        return [];
    }
}

export default function AddToCart() {
    const value = useSelector(state => state.incrementDecrement.count)
    const storageCartItem = getlocalStorage();
    const dispatch = useDispatch()

    const productDelete = () => {
        // if (window.confirm("Are you sure you want to delete contact?")) {
        //     dispatch(deleteProduct(id));
        //     toast.success("Product deleted successfully", {
        //         icon: "😄"
        //     });
        //     dispatch(getProduct())
        // }
    }

    const columns = [
        {
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Product Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            key: 'delete',
            render: (_, product) => (
                <DeleteOutlined
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => productDelete()} />
            ),
        },
    ];

    const footer = () => {
        return (
            <>
                <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={columns.length - 1}>
                        Total
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                        <Text style={{ fontWeight: '500' }}>10000</Text>
                    </Table.Summary.Cell>
                </Table.Summary.Row>
            </>
        )
    }

    const product = storageCartItem.map((product) => ({
        key: product.id,
        image: <img src={product.image} alt='not found' style={{ maxWidth: '100%' }} />,
        name: product.name,
        brand: product.brand,
        quantity: <>
            <div className="card-info">
                <Button type="text" onClick={() => { dispatch(decrement()) }} className='minus'>-</Button>
                <input type="text" value={value} onChange={(e) => { console.log('dfdfs') }} />
                <Button type="text" onClick={() => { dispatch(increment()) }} className='plus'>+</Button>
            </div>
        </>,
        price: product.price
    }))

    return (
        <>
            <h2>Cart</h2>
            <div className='no-cart'>
                {storageCartItem.length === 0 && <div className='empty-cart'>
                    <img src={emptyCard} alt='not found' />
                </div>}
            </div>

            <div className='item-inside-cart'>
                <Table
                    columns={columns}
                    dataSource={product}
                    pagination={false}
                    summary={footer}
                />

                <div className='checkout-buttons'>
                    <Link to='/' style={{ textDecoration: 'underline' }}><ArrowLeftOutlined /> Continue Shopping?</Link>
                    <Button className='checkout'>Procced to Checkout<ArrowRightOutlined /></Button>
                </div>
            </div>
        </>
    )
}
