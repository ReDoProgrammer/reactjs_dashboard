import { Table, Typography,Space } from 'antd';
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
                    label: 'Title',
                    dataIndex: 'title'
                },
                {
                    label: 'Price',
                    dataIndex: 'price'
                },
                {
                    label: 'Rating',
                    dataIndex: 'rating'
                },
                {
                    label: 'Stock',
                    dataIndex: 'stock'
                },
                {
                    label: 'Thumbnail',
                    dataIndex: 'thumbnail'
                },
                {
                    label: 'Brand',
                    dataIndex: 'brand'
                },
                {
                    label: 'Category',
                    dataIndex: 'category'
                }
            ]}
            dataSource={dataSource}
            loading={loading}
        ></Table>
    </Space>);
}

export default Inventory;