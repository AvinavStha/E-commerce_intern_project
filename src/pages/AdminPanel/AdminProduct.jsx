import { Col, Row, Card } from 'antd'
import React, { useState } from 'react'
import ProductTable from './ProductTable'
import { Input, Button, Modal } from 'antd'
import { AddEditProductDetail } from './AddEditProductDetail';
const { Search } = Input;

export const AdminProduct = () => {
    const onSearch = (value) => console.log(value);
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowForm(false);
        }, 3000);
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
                            onCancel={handleCancel}
                            footer={[
                                <Button key="reset" onClick={handleCancel}>
                                    Reset
                                </Button>,
                                <Button key="cancel" type="danger" onClick={handleCancel}>
                                    Cancel
                                </Button>,
                                <Button
                                    key="submit"
                                    style={{ background: 'green', color: 'white' }}
                                    onClick={handleOk}
                                    loading={loading}
                                >
                                    Add Products
                                </Button>
                            ]}
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
