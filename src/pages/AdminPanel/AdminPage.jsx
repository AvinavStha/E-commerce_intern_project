import React from 'react'
import { AdminSider } from "../../components/AdminSider";
import { useSelector } from 'react-redux';
import { AdminContent } from './AdminContent';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

export const AdminPage = () => {
    const content = useSelector(state => state.incrementDecrement.index)
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    paddingTop: '1.5rem'
                }}
            >
                <AdminSider />
            </Sider>
            <Layout
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        paddingTop: '1.5rem',
                    }}
                >
                    <h1 style={{ textAlign: 'center', color: "white" }}>AdminPage</h1>
                </Header>
                <Content
                    style={{
                        margin: '2.4rem 2.4rem 0',
                        overflow: 'initial',
                    }}
                >
                    {AdminContent.filter(item => item.id === content).map((item, index) => (
                        <div key={index}>{item.component}</div>
                    ))}
                </Content>
            </Layout>
        </Layout>
    );
}


