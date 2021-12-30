import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParcelInfo from "./components/parcel/ParcelInfo";
import ParcelData from "./components/parcel/ParcelData";
import Demo from "./components/nav/Demo";
import SigninNew from "./components/sign/SigninNew";

function App() {
  const [auth, setAuth] = useState(0);
  localStorage.setItem("email", "pratik@gmail.com");
  localStorage.setItem("pass", "pratik");
  return (
    <BrowserRouter>
      <br />
      {auth === 0 && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <SigninNew setAuth={setAuth} />
              </>
            }
          />
        </Routes>
      )}
      {auth === 1 && (
        <Demo>
          <Routes>
            {/* <Route path="/"><SignIn /></Route> */}
            {/* <Route path="/signIn" element={<SignIn />} /> */}
            {/* <Route path="/signinNew" element={<SigninNew />} />
            <Route path="/signUp" element={<SignUp />} /> */}
            <Route path="/parcel" element={<ParcelInfo />} />
            <Route path="/parcelData" element={<ParcelData />} />

            {/* <Route path="/demo" element={<Demo />} /> */}
            {/* <SignUp /> */}
            {/* </Route> */}
          </Routes>
        </Demo>
      )}
      <br />
    </BrowserRouter>
  );
}

export default App;
