import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

import V0QuickStart from './docs/v0/QuickStart';
import V0Installation from './docs/v0/Installation';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/v0/quick-start" element={<V0QuickStart />} />
            <Route path="/docs/v0/installation" element={<V0Installation />} />
          </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
