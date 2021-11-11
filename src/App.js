import Products from "./components/Products";
import Basket from "./components/Basket";
import "./App.css";
import React from "react";

function App() {
    return (
        <div className="app">
            <Products />
            <Basket />
        </div>
    );
}

export default App;