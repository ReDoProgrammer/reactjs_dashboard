import './App.css';
import AppHeader from './Components/AppHeader';
import { Space } from 'antd';
import SideBar from './Components/SideBar';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className='SidebarAndPagecontent'>
        <SideBar />
        <PageContent />
      </Space>
      <AppFooter/>
    </div>
  );
}

export default App;
