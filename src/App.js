
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components';
import ExterciseDetail from './pages/ExterciseDetail';
import Home from './pages/Home';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='exercise/:id' element={<ExterciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
