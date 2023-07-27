import "./App.css";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/contact" element={  <Contact />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
