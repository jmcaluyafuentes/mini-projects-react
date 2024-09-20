import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [searchCriteria, setSearchCriteria] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleSelection = (recipe) => {
    setSearchCriteria(prev => 
      prev.includes(recipe) ? prev.filter((p) => p !== recipe) : [...prev, recipe]
    )
  }

  useEffect(() => {
    console.log(searchCriteria);
  }, [searchCriteria]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://jellybellywikiapi.onrender.com/api/Recipes');
        if (!response.ok) {
          throw new Error ('Network response was not ok');
        }
        const data = await response.json();
        const items = data.items;
        setRecipes(items);
      } catch (error) {
        console.error('Error fetching recipes: ', error)
      }
    }

  fetchRecipes();
  }, [])

  return (
    <div className="recipe-options">
      {recipes.map((recipe) => (
        <label key={recipe.recipeId}>
          <input 
            type="checkbox" 
            value={recipe.name}
            checked={searchCriteria.includes(recipe.name)}
            onChange={() => handleSelection(recipe.name)}
          />
          {recipe.name}
        </label>
      ))}
    </div>
  )
}

export default App
