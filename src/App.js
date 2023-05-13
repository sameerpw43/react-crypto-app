
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Coin from "./Components/Coin";
import Home from "./Components/Home";
import Exchanges from "./Components/Exchanges";
import CoinDetails from "./Components/CoinCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coin/>}/>
        
        
        
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
