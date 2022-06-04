import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

function App() {

  const [user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <div>
        <Navbar user= {user}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" />  : <Login/> }
           />
          <Route path="/post/:id" element={ user ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
