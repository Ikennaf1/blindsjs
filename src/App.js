import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

import V0QuickStart from './docs/v0/QuickStart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/v0/quick-start" element={<V0QuickStart />} />
          </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
