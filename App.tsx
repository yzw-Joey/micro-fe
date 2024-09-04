import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => (
  <div className="router-container">
    <Link to="/vue-app">Vue App</Link>
    <Link to="/react-app">React App</Link>
  </div>
);


const Home = () => <div>Home</div>;

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <div className="micro-container" id="micro-apps"></div>
    </div>
  );
}

export default App;
