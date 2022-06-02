import { Form, Input, Select, Button, Upload, message, Row } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getProduct } from '../../redux/actions/productActions';
import { toast } from 'react-toastify';

const { Option } = Select;
const layout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export const AddEditProductDetail = ({ showForm }) => {
    const [form] = Form.useForm();
    const [state, setState] = useState({
        // id: Date.now(),
        image: "",
        name: "",
        description: "",
        brand: "",
        type: "",
        price: "",
        stock: "",
    })

    const singleProduct = useSelector(state => state.productReducer.single_product)
    console.log("kjd", singleProduct)
    const dispatch = useDispatch()
    useEffect(() => {
        setState({ ...singleProduct })
        console.log("state", state)
    }, [singleProduct])

    const { name, brand, type, description, price, stock } = state

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const addEditProduct = (e) => {
        e.preventDefault()
        if (!name || !brand || !stock || !price) {
            toast.error("Required field cannot be empty", {
                icon: "😠"
            });
        }
        else {
            toast.success("Data added successfully", {
                icon: "😄"
            });
            dispatch(addProduct(state))
            showForm(false)
            dispatch(getProduct())
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleReset = () => {
        console.log("reset")
        setState({})
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        return isJpgOrPng || Upload.LIST_IGNORE;
    };

    return (
        <form onSubmit={addEditProduct} className='product-form'>
            <Row justify='center'>
                <Upload name="logo"
                    listType="picture"
                    beforeUpload={beforeUpload}
                    maxCount={1}
                    onChange={(e) => {
                        if (Array.isArray(e)) {
                            return e;
                        }
                        return e?.fileList;
                    }}
                >
                    <Button icon={<UploadOutlined />}>Upload Product Image</Button>
                </Upload>
            </Row>
            <Row justify='center'>
                <Input
                    onChange={handleInputChange}
                    name='name'
                    value={name}
                />
            </Row>
            <Row justify='space-around'>
                <Select
                    labelInValue
                    placeholder="Select a brand"
                    style={{ width: 130 }}
                    onChange={(e) => { setState({ ...state, brand: e.value }) }}
                    label='brand'
                    name='brand'
                    value={brand}
                >
                    <Option value="beer">Beer</Option>
                    <Option value="rum">Rum</Option>
                    <Option value="vodka">Vodka</Option>
                    <Option value="whisky">Whiskey</Option>
                    <Option value="wine">Wine</Option>
                    <Option value="brandy">Brandy</Option>
                    <Option value="kodo">Kodo</Option>
                </Select>
                <Select
                    labelInValue
                    placeholder="Select a type of product"
                    style={{ width: 130 }}
                    onChange={(e) => { setState({ ...state, type: e.value }) }}
                    name='type'
                    label='type'
                    value={type}
                >
                    <Option value="imported">Imported</Option>
                    <Option value="domestic">Domestic</Option>
                </Select>
            </Row>
            <Row>
                <Input.TextArea
                    onChange={handleInputChange}
                    name='description'
                    value={description} />
            </Row>
            <Row justify='space-around'>
                <Input style={{ width: 140 }}
                    onChange={handleInputChange}
                    name='price'
                    prefix='Rs'
                    value={price} />
                <Input style={{ width: 140 }}
                    onChange={handleInputChange}
                    name='stock'
                    value={stock} />
            </Row>
            <Row justify='space-evenly'>
                <Button key="reset" onClick={handleReset}>
                    Reset
                </Button>
                <Button
                    key="submit"
                    style={{ background: 'green', color: 'white' }}
                    onClick={addEditProduct}
                // loading={loading}
                >
                    Add Products
                </Button>
            </Row>
        </form>
        // <Form {...layout} form={form} name="control-hooks" onFinish={addEditProduct}>
        //     <Form.Item
        //         name="upload"
        //         label="Upload"
        //         valuePropName="fileList"
        //         getValueFromEvent={normFile}
        //         rules={[
        //             {
        //                 required: true,
        //             }
        //         ]}
        //     >
        //         <Upload name="logo"
        //             listType="picture"
        //             beforeUpload={beforeUpload}
        //             maxCount={1}
        //             onChange={(e) => {
        //                 if (Array.isArray(e)) {
        //                     return e;
        //                 }
        //                 return e?.fileList;
        //             }}
        //         >
        //             <Button icon={<UploadOutlined />}>Upload Product Image</Button>
        //         </Upload>
        //     </Form.Item>
        //     <Form.Item
        //         name="product-name"
        //         label="Product Name"
        //         rules={[
        //             {
        //                 required: true,
        //             },
        //         ]}
        //     >
        //         <Input
        //             onChange={handleInputChange}
        //             name='name'
        //             value={name}
        //         />
        //     </Form.Item>

        //     <Row justify='space-around'>
        //         <Form.Item
        //             name="brand"
        //             label="Brand"
        //             rules={[
        //                 {
        //                     required: true,
        //                 },
        //             ]}
        //         >
        //             <Select
        //                 labelInValue
        //                 placeholder="Select a brand"
        //                 style={{ width: 130 }}
        //                 onChange={(e) => { setState({ ...state, brand: e.value }) }}
        //                 label='brand'
        //                 name='brand'
        //                 value={brand}
        //             >
        //                 <Option value="beer">Beer</Option>
        //                 <Option value="rum">Rum</Option>
        //                 <Option value="vodka">Vodka</Option>
        //                 <Option value="whisky">Whiskey</Option>
        //                 <Option value="wine">Wine</Option>
        //                 <Option value="brandy">Brandy</Option>
        //                 <Option value="kodo">Kodo</Option>
        //             </Select>
        //         </Form.Item>
        //         <Form.Item
        //             name="type"
        //             label="Type"
        //         >
        //             <Select
        //                 labelInValue
        //                 placeholder="Select a type of product"
        //                 style={{ width: 130 }}
        //                 onChange={(e) => { setState({ ...state, type: e.value }) }}
        //                 name='type'
        //                 label='type'
        //                 value={type}
        //             >
        //                 <Option value="imported">Imported</Option>
        //                 <Option value="domestic">Domestic</Option>
        //             </Select>
        //         </Form.Item>
        //     </Row>

        //     <Form.Item
        //         name="product-description"
        //         label="Description"
        //     >
        //         <Input.TextArea
        //             onChange={handleInputChange}
        //             name='description'
        //             value={description} />
        //     </Form.Item>

        //     <Row justify='space-around'>
        //         <Form.Item
        //             name="price"
        //             label="Price"
        //             rules={[
        //                 {
        //                     required: true,
        //                 },
        //             ]}
        //         >
        //             <Input style={{ width: 140 }}
        //                 onChange={handleInputChange}
        //                 name='price'
        //                 prefix='Rs'
        //                 value={price} />
        //         </Form.Item>

        //         <Form.Item
        //             name="stock"
        //             label="Stock"
        //             rules={[
        //                 {
        //                     required: true,
        //                 },
        //             ]}
        //         >
        //             <Input style={{ width: 140 }}
        //                 onChange={handleInputChange}
        //                 name='stock'
        //                 value={stock} />
        //         </Form.Item>
        //     </Row>
        //     <Row justify='space-evenly'>
        //         <Button key="reset" onClick={handleReset}>
        //             Reset
        //         </Button>
        //         <Button
        //             key="submit"
        //             style={{ background: 'green', color: 'white' }}
        //             onClick={addEditProduct}
        //         // loading={loading}
        //         >
        //             Add Products
        //         </Button>
        //     </Row>
        // </Form>
    );
};
