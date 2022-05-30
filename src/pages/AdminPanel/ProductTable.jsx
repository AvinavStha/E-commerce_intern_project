import { Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

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
        render: (_, record) => (
            <Space size="middle">
                <EditOutlined style={{ cursor: 'pointer' }} />
                <DeleteOutlined style={{ cursor: 'pointer' }} />
            </Space>
        ),
    },
];
const data = [];

for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        brand: 'beer',
        type: 'domestic',
        description: 'cnbvjhxbvjbdfjhgkdx',
        price: 3200,
        stock: 4
    });
}

const ProductTable = () => <Table columns={columns} dataSource={data} />;

export default ProductTable;