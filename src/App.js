import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Subpage from './pages/Subpage';

function App() {
  const [subpageContent, setSubpageContent] = useState(null);

  return (
    <div className="App">
      <Navigation setSubpageContent={setSubpageContent} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/subpage"
          element={<Subpage subpageContent={subpageContent} />}
        />
      </Routes>
    </div>
  );
}

export default App;
