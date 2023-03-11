import { Menu } from 'antd';
function SideBar() {
    return (<div className="SideBar">
        <Menu 
        onClick={item=>{
            //item.key
        }}
        items={[
            {
                label: 'Dashboard',
                key: '/'
            },
            {
                label: 'Inventoy',
                key: '/inventory'
            },
            {
                label: 'Orders',
                key: '/orders'
            },
            {
                label: 'Customers',
                key: '/customers'
            }
        ]}>

        </Menu>
    </div>);
}

export default SideBar;