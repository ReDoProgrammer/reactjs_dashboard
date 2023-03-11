import { Menu } from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
function SideBar() {
    const location = useLocation();
    useEffect(() => {
     const pathName = location.pathname;
     setselectedKeys(pathName);
    }, [location.pathname])
    
    const [selectedKeys, setselectedKeys] = useState('/')

    const navigate = useNavigate();
    return (<div className="SideBar">
        <Menu 
        onClick={item=>{
            navigate(item.key)
        }}
        selectedKeys={[selectedKeys]}
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