import React, { useState, useEffect } from 'react';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Recipes from "./Components/Recipes/Recipes";
import SingleRecipe from "./Components/SingleRecipe/SingleRecipe";
import axios from 'axios';
import './App.css';
import { Switch,Route } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Spaghetti')
  const getRecipes = () => {
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
      .then((res) => setRecipes(res.data.hits))
      .catch((error) => alert(error)
      )
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = (e) => {
    e.preventDefault();
    if(search==='')
    {setQuery(search);
    setSearch('')}
  }
  useEffect(() => {
    getRecipes()
  }, [query])

  return (
    <div className="App">
      <NavBar />
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-box" placeholder='Search for a recipe...' value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <Switch>
        <Route exact path='/' render={()=><Recipes recipes={recipes}/>}/>
        <Route path="/recipes/:idrecipe" component={SingleRecipe}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
