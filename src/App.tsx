import React from 'react';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import './App.css'; // Importa i tuoi stili globali qui

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;

