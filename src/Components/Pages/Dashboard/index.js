import { Card, Space, Typography, Statistic, Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { DollarCircleOutlined, ShoppingFilled, UserOutlined } from '@ant-design/icons/lib/icons';
import { getRecentOrders } from '../../../API'
import { useEffect, useState } from 'react';
function Dashboard() {
    return (<div>
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction='horizontal'>
                <DashboardCard title={'Orders'}
                    value={12345}
                    icon={<ShoppingCartOutlined
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0,255,0,0.25)',
                            borderRadius: 20,
                            fontSize: 24,
                            padding: 8
                        }}
                    />}
                />
                <DashboardCard title={'Customers'} value={532} icon={<UserOutlined
                    style={{
                        color: 'purple',
                        backgroundColor: 'rgba(0,255,255,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8
                    }} />} />
                <DashboardCard title={'Inventory'} value={53632} icon={<ShoppingFilled style={{
                    color: 'blue',
                    backgroundColor: 'rgba(0,0,255,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8
                }} />} />
                <DashboardCard title={'Revenue'} value={3563} icon={<DollarCircleOutlined style={{
                    color: 'red',
                    backgroundColor: 'rgba(255,0,0,0.25)',
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8
                }} />} />
            </Space>
            <Space>
                <RecentOrders />
            </Space>
        </Space>
    </div>);
}

function DashboardCard({ title, value, icon }) {
    return (<Card>
        <Space direction='horizontal'>
            {icon}
            <Statistic title={title} value={value} />
        </Space>
    </Card>)
}
function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getRecentOrders().then(rs => {
            setDataSource(rs.products);
            setLoading(false);
        })
    }, [])

    return <>
        <Typography.Text>Recent Orders</Typography.Text>
        <Table
            columns={[
                {
                    title: 'Title',
                    dataIndex: 'title'
                },
                {
                    title: 'Price',
                    dataIndex: 'discountedPrice'
                },
                {
                    title: 'Qty',
                    dataIndex: 'quantity'
                }
            ]}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
        ></Table>
    </>
}

export default Dashboard;