import { Table, Typography,Space, Avatar} from 'antd';
import { getCustomer } from '../../../API';
import {useState, useEffect } from 'react';
function Customer() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        setLoading(true);
        getCustomer()
            .then(res => {
                setLoading(false);
                setDataSource(res.users);
            })
    }, [])

    return (<Space size={20} direction="vertical">
        <Typography.Title level={4}>Customer</Typography.Title>
        <Table
            columns={[
                {
                    title: 'Avatar',
                    dataIndex: 'image',
                    render: link=>{
                        return <Avatar src={link}/>
                    }
                },
                {
                    title: 'FirstName',
                    dataIndex: 'firstName'
                },
                {
                    title: 'LastName',
                    dataIndex: 'lastName'                    
                },
                {
                    title: 'MaidenName',
                    dataIndex: 'maidenName'                   
                },
                
                {
                    title: 'Age',
                    dataIndex: 'age'                    
                },
                {
                    title: 'Gender',
                    dataIndex: 'gender'                   
                },
                {
                    title: 'Email',
                    dataIndex: 'email'                   
                },
                {
                    title: 'Phone',
                    dataIndex: 'phone'                   
                },
                {
                    title: 'Username',
                    dataIndex: 'username'                   
                },
                {
                    title:"Address",
                    dataIndex:'address',
                    render: address=>{
                        return <span>{address.address}, {address.city}</span>
                    }
                }              
               
            ]}
            dataSource={dataSource}
            loading={loading}
            pagination={{pageSize:5}}
        ></Table>
    </Space>);
}

export default Customer;