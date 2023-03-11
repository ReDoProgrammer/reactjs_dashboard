import './App.css';
import AppHeader from './Components/AppHeader';
import SideBar from './Components/SideBar';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='SidebarAndPagecontent'>
        <SideBar />
        <PageContent />
      </div>
      <AppFooter/>
    </div>
  );
}

export default App;
