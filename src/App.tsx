import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import MusicPlayer from './components/MusicPlayer';
import './App.css'; 
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <MainPage />
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
