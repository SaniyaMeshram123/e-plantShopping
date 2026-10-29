
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function Home() {
  const navigate = useNavigate();
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    navigate("/plants");
  };

  return (
    <div className="background-image">
      <div className="landing-overlay">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Bring nature into your home with beautiful and healthy plants.
        </p>

        <div
          className="app-container"
          onClick={handleGetStarted}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleGetStarted();
            }
          }}
        >
          <button
            className="get-started-button"
            onClick={(e) => {
              e.stopPropagation();
              handleGetStarted();
            }}
          >
            Get Started
          </button>
        </div>

        <AboutUs />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

