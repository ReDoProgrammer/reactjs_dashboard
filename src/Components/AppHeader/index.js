import { Image, Typography, Space,Badge } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
function AppHeader() {
    return (<div className="AppHeader">
        <Image src='https://cdn-icons-png.flaticon.com/128/1794/1794749.png' width={40} />
        <Typography.Title>ReDo's Dashboard</Typography.Title>
        <Space>
            <Badge count = {5} dot>
                <MailOutlined style={{ fontSize: 24 }} />
            </Badge>
            <Badge count={20}>
                <BellFilled style={{ fontSize: 24 }} />
            </Badge>
        </Space>
    </div>);
}

export default AppHeader;