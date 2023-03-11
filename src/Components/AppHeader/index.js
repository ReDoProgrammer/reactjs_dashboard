import { Image, Typography, Space,Badge, Drawer } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import {getComments,getOrder} from '../../API';
import { useEffect, useState } from 'react';
function AppHeader() {
    const [comments, setcomments] = useState(0);
    const [orders, setorders] = useState(0);
    const [commentsOpen, setcommentsOpen] = useState(false);
    const [notificationsOpen, setnotificationsOpen] = useState(false)
    useEffect(() => {
        getComments()
        .then(res=>{
            setcomments(res.total);
        })
        getOrder()
        .then(res=>{
            setorders(res.total)
        })
    }, [])
    
    return (<div className="AppHeader">
        <Image src='https://cdn-icons-png.flaticon.com/128/1794/1794749.png' width={40} />
        <Typography.Title>ReDo's Dashboard</Typography.Title>
        <Space>
            <Badge count = {comments} dot>
                <MailOutlined style={{ fontSize: 24 }} onClick={()=>{
                    setcommentsOpen(true);
                }}/>
            </Badge>
            <Badge count={orders}>
                <BellFilled style={{ fontSize: 24 }} />
            </Badge>
        </Space>
        <Drawer title="Comments" 
        open={commentsOpen} 
        onClose={()=>{
            setcommentsOpen(false);
        }}
        maskClosable
        ></Drawer>
    </div>);
}

export default AppHeader;