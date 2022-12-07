import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import PrivateRouter from "./router/PrivateRouter";
import MovieDetails from "./pages/MovieDetails";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          <Navbar />
          {/* <Main/> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<PrivateRouter />}>
              <Route path="" element={<MovieDetails />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
