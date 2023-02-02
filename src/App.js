import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, AbortedDeferredError } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SinglePage from "./pages/SinglePage";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      {/* <HomeContent></HomeContent>
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:id" element={<SinglePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
