import { Form, Input, InputNumber, Select, Button, Upload, message, Row } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
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

export const AddEditProductDetail = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }

        return isJpgOrPng || Upload.LIST_IGNORE;
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                    {
                        required: true,
                    }
                ]}
            >
                <Upload name="logo"
                    action="/upload.do"
                    listType="picture"
                    beforeUpload={beforeUpload}
                    maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload Product Image</Button>
                </Upload>
            </Form.Item>
            <Form.Item
                name="product-name"
                label="Product Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Row justify='space-around'>
                <Form.Item
                    name="brand"
                    label="Brand"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a brand"
                        style={{ width: 130 }}
                    >
                        <Option value="beer">Beer</Option>
                        <Option value="rum">Rum</Option>
                        <Option value="vodka">Vodka</Option>
                        <Option value="whisky">Whiskey</Option>
                        <Option value="wine">Wine</Option>
                        <Option value="brandy">Brandy</Option>
                        <Option value="kodo">Kodo</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Type"
                >
                    <Select
                        placeholder="Select a type of product"
                        style={{ width: 130 }}
                    >
                        <Option value="imported">Imported</Option>
                        <Option value="domestic">Domestic</Option>
                    </Select>
                </Form.Item>
            </Row>

            <Form.Item
                name="product-description"
                label="Description"
            >
                <Input.TextArea />
            </Form.Item>

            <Row justify='space-around'>
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber style={{ width: 140 }} />
                </Form.Item>

                <Form.Item
                    name="stock"
                    label="Stock"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber style={{ width: 140 }} />
                </Form.Item>
            </Row>
        </Form>
    );
};
