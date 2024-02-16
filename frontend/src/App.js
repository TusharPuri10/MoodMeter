import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed';
import { LandingPage } from './components/LandingPage';
import About from './components/About';
import V2 from './components/V2';
import { SignedOut, SignedIn } from "@clerk/clerk-react"
function App() {
  return (
    // BEM
      <div className="App">
      {/* Feed */}
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/v1/home" element={<SignedIn><Feed /></SignedIn>} />
            <Route path="/v1/about" element={<SignedIn><About/></SignedIn>} />
            {/* <Route path="/v2" element={<V2/>} /> */}
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
