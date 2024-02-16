import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import MusicPlayer from './components/MusicPlayer';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainPage />
      <MusicPlayer />
    </div>
  
  );
}

export default App;
