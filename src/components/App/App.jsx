import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews"
import AboutMe from "../AboutMe/AboutMe"
<<<<<<< HEAD
import AboutUs from "../AboutMe/AboutUs"
=======
>>>>>>> e62781659e733e548f8ed595f2f23126ce5dd2b8

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
<Route path="/" element={<Dashboard />} />
<Route path="reviews" element={<Reviews />} />
<Route path="about-me" element={<AboutMe />} />
<<<<<<< HEAD
<Route path="about-us" element={<AboutUs />} />
=======
>>>>>>> e62781659e733e548f8ed595f2f23126ce5dd2b8
      </Routes>
    </div>
  );
}

export default App;
