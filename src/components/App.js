import React from "react";
import Header from "./common/Header";
import AppRouter from "./common/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar closeOnClick />
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
