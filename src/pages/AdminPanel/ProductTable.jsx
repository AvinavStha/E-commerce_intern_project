import { Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { getProduct, deleteProduct, getSingleProduct } from '../../redux/actions/productActions';

const ProductTable = ({ showForm }) => {
    const products = useSelector(state => state.productReducer.product_details)
    const singleProduct = useSelector(state => state.productReducer.single_produc)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    useEffect(() => {
        dispatch(getProduct())
    }, [singleProduct])


    const productDelete = (id) => {
        if (window.confirm("Are you sure you want to delete contact?")) {
            dispatch(deleteProduct(id));
            toast.success("Product deleted successfully", {
                icon: "😄"
            });
            dispatch(getProduct())
        }
    }

    const productEdit = (id) => {
        dispatch(getSingleProduct(id))
        showForm(true)
    }

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
                    <EditOutlined
                        style={{ cursor: 'pointer', color: 'green' }}
                        onClick={() => productEdit(product.key)}
                    />
                    <DeleteOutlined
                        style={{ cursor: 'pointer', color: 'red' }}
                        onClick={() => productDelete(product.key)} />
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