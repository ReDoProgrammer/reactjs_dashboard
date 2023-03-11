import { Table, Typography,Space, Avatar, Rate } from 'antd';
import { getInventory } from '../../../API';
import {useState, useEffect } from 'react';
function Inventory() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        setLoading(true);
        getInventory()
            .then(res => {
                setLoading(false);
                setDataSource(res.products);
            })
    }, [])

    return (<Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
            columns={[
                {
                    title: 'Thumbnail',
                    dataIndex: 'thumbnail',
                    render: link=>{
                        return <Avatar src={link}/>
                    }
                },
                {
                    title: 'Title',
                    dataIndex: 'title'
                },
                {
                    title: 'Price',
                    dataIndex: 'price',
                    render: value=>{
                        return <span>${value}</span>
                    }
                },
                {
                    title: 'Rating',
                    dataIndex: 'rating',
                    render: rating=>{
                        return <Rate value={rating} allowHalf disabled/>
                    }
                },
                {
                    title: 'Stock',
                    dataIndex: 'stock'
                },
                
                {
                    title: 'Brand',
                    dataIndex: 'brand'
                },
                {
                    title: 'Category',
                    dataIndex: 'category'
                }
            ]}
            dataSource={dataSource}
            loading={loading}
            pagination={{pageSize:5}}
        ></Table>
    </Space>);
}

export default Inventory;