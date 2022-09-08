import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
const Hello = () => {
  const fullScreen = () => {
    window.electron.ipcRenderer.fullScreen();
  }
  return (
          <button type="button" onClick={fullScreen}>
            Toggle Full Screen
          </button>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
