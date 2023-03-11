import {BrowserRoutes,Routes,Route} from 'react-router-dom';
import Customer from '../Pages/Customer';
import Dashboard from '../Pages/Dashboard';
import Inventory from '../Pages/Inventory';
import Order from '../Pages/Order';
function AppRoutes() {
    return ( 
    <BrowserRoutes>
    <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/customers' element={<Customer/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
        <Route path='/orders' element={<Order/>}></Route>
    </Routes>
    </BrowserRoutes> 
    );
}

export default AppRoutes;