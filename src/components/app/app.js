import React from 'react';
import "./app.css";
import Navbar from "../navbar/navbar";
import FeaturedProducts from "../featured-products/featured-products";

const App = () => {
    return (
        <div className="app-container">
            <Navbar/>
            <FeaturedProducts/>
        </div>
    );
};

export default App;