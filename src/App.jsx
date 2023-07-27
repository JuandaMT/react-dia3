import "./App.css";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/contact" element={  <Contact />}/>
        <Route path="/" element={  <Home />}/>
        <Route path="/about" element={  <About />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
