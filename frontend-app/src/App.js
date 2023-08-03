import './App.css';
import Main from './components/Main';
import Projects from "./components/projects";
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  );
}

export default App;
