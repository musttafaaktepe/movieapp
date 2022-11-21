import "./App.css";
import Main from "./pages/Main";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Main/> */}
    <Routes>
      <Route path='/' element={<Main/>} />

    </Routes>
    
    </>
  );
}

export default App;
