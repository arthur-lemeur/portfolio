import './App.css';
import "./assets/styles/global.scss";
import "./assets/styles/variables.scss";
import "./assets/fonts/Sansation_Light.ttf";
import { Home } from './pages/Home/Home.tsx';
import { Layout } from './Layout/Layout.tsx';
import { About } from './pages/About/About.tsx';
import { Projects } from './pages/Projects/Projects.tsx';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ProjectComponent } from './components/ProjectComponent/ProjectComponent.tsx';
import { ProjectPage } from './pages/Project/ProjectPage.tsx';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Projects />
                </>
              }
            />
            <Route path='/project/:id' element={<ProjectPage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
