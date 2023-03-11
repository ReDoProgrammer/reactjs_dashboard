import { Card, Space, Typography, Statistic, Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { DollarCircleOutlined, ShoppingFilled, UserOutlined } from '@ant-design/icons/lib/icons';
import { getRecentOrders } from '../../../API'
import { useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


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
                <DasboardChart/>
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
            setDataSource(rs.products.splice(0, 3));
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

function DasboardChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random()*1000),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.random()*1000),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data} />;
}

export default Dashboard;