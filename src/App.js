import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { blindsInit, blindsToggle, setBlindsStyles } from 'blinds';
import DarkModeStyle from './DarkModeStyle.json';
import ScrollToTop from './ScrollToTop';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

const V0QuickStart = lazy(() => import('./docs/v0/QuickStart'));
const V0Installation = lazy(() => import('./docs/v0/Installation'));
const V0CustomStyling = lazy(() => import('./docs/v0/CustomStyling'));
const V0CustomIcons = lazy(() => import('./docs/v0/CustomIcons'));

function App() {

  useEffect(() => {
    setBlindsStyles(DarkModeStyle);

    blindsInit();

    document.querySelector('#blinds_id').onclick = () => {
      blindsToggle();
    }

    return ( () => {
      blindsInit();      
    });
  });

  return (
    <BrowserRouter>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Navigate to="/docs/v0/installation" replace={true} />} />
          <Route path="/docs/v0" element={<Navigate to="/docs/v0/installation" replace={true} />} />

          <Route path="/docs/v0/quick-start" element={<Suspense fallback={<h2>loading...</h2>}><V0QuickStart /></Suspense>} />
          <Route path="/docs/v0/installation" element={<Suspense fallback={<h2>loading...</h2>}><V0Installation /></Suspense>} />
          <Route path="/docs/v0/custom-styling" element={<Suspense fallback={<h2>loading...</h2>}><V0CustomStyling /></Suspense>} />
          <Route path="/docs/v0/custom-icons" element={<Suspense fallback={<h2>loading...</h2>}><V0CustomIcons /></Suspense>} />
        </Routes>

        <Footer />
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
