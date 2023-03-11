import { Image, Typography, Space, Badge, Drawer, List } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import { getComments, getOrder } from '../../API';
import { useEffect, useState } from 'react';
function AppHeader() {
    const [comments, setcomments] = useState([]);
    const [orders, setorders] = useState([]);
    const [commentsOpen, setcommentsOpen] = useState(false);
    const [notificationsOpen, setnotificationsOpen] = useState(false)
    useEffect(() => {
        getComments()
            .then(res => {
                setcomments(res.comments);
            })
        getOrder()
            .then(res => {
                setorders(res.products)
            })
    }, [])

    return (<div className="AppHeader">
        <Image src='https://cdn-icons-png.flaticon.com/128/1794/1794749.png' width={40} />
        <Typography.Title>ReDo's Dashboard</Typography.Title>
        <Space>
            <Badge count={comments.length} dot>
                <MailOutlined style={{ fontSize: 24 }} onClick={() => {
                    setcommentsOpen(true);
                }} />
            </Badge>
            <Badge count={orders.length}>
                <BellFilled style={{ fontSize: 24 }} onClick={() => {
                    setnotificationsOpen(true);
                }} />
            </Badge>
        </Space>
        <Drawer title="Comments"
            open={commentsOpen}
            onClose={() => {
                setcommentsOpen(false);
            }}
            maskClosable
        >
            <List dataSource={comments} renderItem={item=>{
                return <List.Item>{item.body}</List.Item>
            }}></List>
        </Drawer>
        <Drawer title="Notifications"
            open={notificationsOpen}
            onClose={() => {
                setnotificationsOpen(false);
            }}
            maskClosable
        >
             <List dataSource={orders} renderItem={item=>{
                return <List.Item><Typography.Text strong>{item.title}</Typography.Text> has been ordered!</List.Item>
            }}></List>
        </Drawer>
    </div>);
}

export default AppHeader;