import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed';
import { LandingPage } from './components/LandingPage';
import About from './components/About';
function App() {
  return (
    // BEM
      <div className="App">



      {/* Feed */}
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Feed />} />
            <Route path="/about" element={<About/>} />
          </Routes>
      </BrowserRouter>

      {/* if About Project click */}
      {/* <Aboutproject/> */}

      {/* if About Developer click */}
      {/* <AboutDeveloper/> */}

      {/* if Future plan click */}
      {/* <FuturePlan/> */}

    </div>
  );
}

export default App;
