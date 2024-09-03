import React from "react";
import "./App.css";

function App() {
  function switchRouter(router) {
    location.pathname = router;
  }
  return (
    <div>
      <div className="router-container">
        <button
          onClick={() => {
            switchRouter("vue");
          }}
        >
          Vue app
        </button>
        <button onClick={() => switchRouter("react")}>React app</button>
      </div>

      <div className="app-container">
        {location.pathname === 'vue' && <div id="vue"></div>}
        {location.pathname === 'react' && <div id="react"></div>}
      </div>
    </div>
  );
}

export default App;
