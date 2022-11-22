import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import  { store } from "./redux"

function App() {
  return (
    <div>
      <Provider store={store}>
    <Navbar/>
    {/* <Main/> */}
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />

    </Routes>
    </Provider>
    </div>
  );
}

export default App;
