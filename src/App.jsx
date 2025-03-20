import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import Solutions from "./pages/Solutions";
import Insights from "./pages/Insights";
import Login from "./pages/Login";


function App() {
  return (
      <BrowserRouter>        
          
            <div className="min-h-screen bg-gray-50">
              <Routes>
                <Route element={<> <Navbar /><MainLayout /></>}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                  <Route path="/Solutions" element={<Solutions />} />
                  <Route path="/insights" element={<Insights />} />
                </Route>
                <Route>
                  <Route path="/login" element={<Login />} />
                </Route>
              </Routes>
              <ToastContainer />
            </div>
          
      </BrowserRouter>
  );
}

export default App;
