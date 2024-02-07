import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed';
import { LandingPage } from './components/LandingPage';
import About from './components/About';
import V2 from './components/V2';
function App() {
  return (
    // BEM
      <div className="App">
      {/* Feed */}
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/v1/home" element={<Feed />} />
            <Route path="/v1/about" element={<About/>} />
            <Route path="/v2" element={<V2/>} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
