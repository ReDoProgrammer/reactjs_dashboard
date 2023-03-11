import { Card, Space, Typography, Statistic, Table } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { DollarCircleOutlined, ShoppingFilled, UserOutlined } from '@ant-design/icons/lib/icons';
import { getCustomer, getRecentOrders,getRevenue,getOrder,getInventory } from '../../../API'
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
    const [orders, setorders] = useState(0);
    const [customers, setcustomers] = useState(0);
    const [revenue, setrevenue] = useState(0);
    const [inventory, setinventory] = useState(0);

    useEffect(() => {
      getCustomer()
      .then(res=>{
        setcustomers(res.total);
      })
    }, [])

    useEffect(() => {
        getOrder()
        .then(res=>{
            setorders(res.total);
            setrevenue(res.discountedTotal);
        })
    }, [])
    

    useEffect(() => {
        getInventory()
        .then(res=>{
            setinventory(res.total)
        })
    }, [])

 
    
    
    

    return (<div>
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction='horizontal'>
                <DashboardCard title={'Orders'}
                    value={orders}
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
                <DashboardCard title={'Customers'} value={customers} icon={<UserOutlined
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
                <DashboardCard title={'Revenue'} value={revenue} icon={<DollarCircleOutlined style={{
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
    const [revenueData, setRevenueData] = useState({
        labels:[],
        datasets:[]
    });

    useEffect(() => {
        getRevenue()
        .then(rs=>{
            const labels = rs.carts.map(cart=>{
                return `User-${cart.userId}`;
            })
            const data = rs.carts.map(cart=>{
                return cart.discountedTotal;
            })
            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(255, 0, 0, 1)',
                    }
                ],
            };
            setRevenueData(dataSource);
        })   
    }, [])

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
   
    return <Card style={{width:550, height:400}}><Bar options={options} data={revenueData} /></Card>;
}

export default Dashboard;