import "./App.css";
import Main from "./pages/Main";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Navbar/>
    {/* <Main/> */}
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />

    </Routes>
    
    </>
  );
}

export default App;
