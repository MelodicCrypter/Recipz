import React, { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';
import './App.css';

const App = () => {
    // Get your own credentials at edamam.com
    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
    const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

    // States
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    // Effects
    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const resp = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await resp.json();
        setRecipes(data.hits);
    };

    // Handlers
    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>

            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                />
            ))}
        </div>
    );
};

export default App;
