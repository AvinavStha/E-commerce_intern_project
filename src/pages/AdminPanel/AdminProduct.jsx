import { Col, Row, Card } from 'antd'
import React, { useState } from 'react'
import ProductTable from './ProductTable'
import { Input, Button, Modal } from 'antd'
import { AddEditProductDetail } from './AddEditProductDetail';
const { Search } = Input;

export const AdminProduct = () => {
    const onSearch = (value) => console.log(value);
    const [showForm, setShowForm] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setShowForm(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setShowForm(false);
    };


    const displayForm = () => {
        showForm ? setShowForm(false) : setShowForm(true)
    }

    return (
        <>
            <Row justify='space-between'>
                <Col>
                    <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                        size="large"
                    />
                </Col>

                <Col>
                    <Button type="primary" onClick={displayForm}>Add new products</Button>
                    {showForm &&
                        <Modal
                            title="Add new Products"
                            visible={showForm}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <AddEditProductDetail />
                        </Modal>

                    }
                </Col>
            </Row>

            <Card className='admin-product-card'>
                <ProductTable />
            </Card>
        </>
    )
}
