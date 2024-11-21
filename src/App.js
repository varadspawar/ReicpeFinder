import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import './App.css';
import RecipeDetails from './Components/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path = "/recipes/:recipeId" element = {<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
