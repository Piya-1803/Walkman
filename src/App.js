

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewPlaylist from './Addnewplaylist';
import PlaylistDetails from './PlaylistDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Newplaylist" element={<NewPlaylist />} />
        <Route path="/playlist-details" element={<PlaylistDetails />} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;


