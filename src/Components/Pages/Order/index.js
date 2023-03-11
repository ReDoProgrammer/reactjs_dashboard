import { Table, Typography,Space, Avatar, Rate } from 'antd';
import { getOrder } from '../../../API';
import {useState, useEffect } from 'react';
function Order() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        setLoading(true);
        getOrder()
            .then(res => {
                setLoading(false);
                setDataSource(res.products);
            })
    }, [])

    return (<Space size={20} direction="vertical">
        <Typography.Title level={4}>Order</Typography.Title>
        <Table
            columns={[               
                {
                    title: 'Title',
                    dataIndex: 'title'
                },
                {
                    title: 'DiscountedPrice',
                    dataIndex: 'discountedPrice',
                    render: value=>{
                        return <span>${value}</span>
                    }
                },
                {
                    title: 'Price',
                    dataIndex: 'price',
                    render: value=>{
                        return <span>${value}</span>
                    }
                },
                
                {
                    title: 'Quantity',
                    dataIndex: 'quantity'                    
                },
                {
                    title: 'Total',
                    dataIndex: 'total',
                    render: total=>{
                        return <span>${total}</span>
                    }
                }               
               
            ]}
            dataSource={dataSource}
            loading={loading}
            pagination={{pageSize:5}}
        ></Table>
    </Space>);
}

export default Order;