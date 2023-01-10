import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/About Us/AboutUs";
import Shop from "./Components/Shop/Shop";
import ContactUs from "./Components/Contact Us/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
