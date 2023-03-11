import { Card, Space, Typography, Statistic } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { DollarCircleOutlined, ShoppingFilled, UserOutlined } from '@ant-design/icons/lib/icons';
function Dashboard() {
    return (<div>
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction='horizontal'>
            <DashboardCard title={'Orders'}
                value={12345}
                icon={<ShoppingCartOutlined
                    style={{ 
                        color: 'green', 
                        backgroundColor: 'rgba(0,255,0,0.25)' ,
                        borderRadius:20,
                        fontSize:24,
                        padding:8
                    }}
                />}
            />
            <DashboardCard title={'Customers'} value={532} icon={<UserOutlined 
            style={{ 
                color: 'purple', 
                backgroundColor: 'rgba(0,255,255,0.25)' ,
                borderRadius:20,
                fontSize:24,
                padding:8
            }}/>} />
            <DashboardCard title={'Inventory'} value={53632} icon={<ShoppingFilled style={{ 
                color: 'blue', 
                backgroundColor: 'rgba(0,0,255,0.25)' ,
                borderRadius:20,
                fontSize:24,
                padding:8
            }}/>} />
            <DashboardCard title={'Revenue'} value={3563} icon={<DollarCircleOutlined style={{ 
                color: 'red', 
                backgroundColor: 'rgba(255,0,0,0.25)' ,
                borderRadius:20,
                fontSize:24,
                padding:8
            }}/>} />
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

export default Dashboard;