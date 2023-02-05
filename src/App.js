import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./Pages/AddBook";
import Books from "./Pages/Books";
import AboutUs from "./Pages/AboutUs";
import UpdateBook from "./components/UpdateBook";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { Provider } from "react-redux";
import { store } from "./Store";
import Profile from "./Pages/Profile";
function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProducts" element={<AddBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/UpdateBook/:id" element={<UpdateBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />;
            <Route path="/profile" element={<Profile />} />;
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
