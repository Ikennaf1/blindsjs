import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

import V0QuickStart from './docs/v0/QuickStart';
import V0Installation from './docs/v0/Installation';
import V0CustomStyling from './docs/v0/CustomStyling';
import V0CustomIcons from './docs/v0/CustomIcons';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Navigate to="/docs/v0/installation" replace={true} />} />
            <Route path="/docs/v0" element={<Navigate to="/docs/v0/installation" replace={true} />} />

            <Route path="/docs/v0/installation" element={<V0Installation />} />
            <Route path="/docs/v0/quick-start" element={<V0QuickStart />} />
            <Route path="/docs/v0/custom-styling" element={<V0CustomStyling />} />
            <Route path="/docs/v0/custom-icons" element={<V0CustomIcons />} />
          </Routes>

        <Footer />
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
