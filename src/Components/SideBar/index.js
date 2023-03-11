import { Menu } from 'antd';
import {useNavigate} from 'react-router-dom'
import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
function SideBar() {
    const navigate = useNavigate();
    return (<div className="SideBar">
        <Menu 
        onClick={item=>{
            navigate(item.key)
        }}
        items={[
            {
                label: 'Dashboard',
                key: '/',
                icon:<AppstoreOutlined/>
            },
            {
                label: 'Inventoy',
                key: '/inventory',
                icon:<ShopOutlined/>
            },
            {
                label: 'Orders',
                key: '/orders',
                icon:<ShoppingCartOutlined/>
            },
            {
                label: 'Customers',
                key: '/customers',
                icon:<UserOutlined/>
            }
        ]}>

        </Menu>
    </div>);
}

export default SideBar;