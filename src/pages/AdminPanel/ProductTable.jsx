import { Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { getProduct, deleteProduct } from '../../redux/actions/productActions';

const ProductTable = () => {
    const products = useSelector(state => state.productReducer.product_details)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const columns = [
        {
            title: 'Product Image',
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
            title: 'Product Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Product Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, product) => (
                <Space size="middle">
                    <EditOutlined style={{ cursor: 'pointer' }} onClick={() => { console.log(product.key) }} />
                    <DeleteOutlined
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            dispatch(deleteProduct(product.key));
                            toast.success("Product deleted successfully", {
                                icon: "😄"
                            });
                        }} />
                </Space>
            ),
        },
    ];

    const product = products.map((product) => ({
        key: product.id,
        name: product.name,
        brand: product.brand,
        type: product.type,
        description: product.description,
        price: product.price,
        stock: product.stock
    }))

    return (
        <>
            <Table columns={columns} dataSource={product} />
        </>
    )
};

export default ProductTable;