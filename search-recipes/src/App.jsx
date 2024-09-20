import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [searchCriteria, setSearchCriteria] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleSelection = (recipeId) => {
    setSearchCriteria(prev => 
      prev.includes(recipeId) ? prev.filter((p) => p !== recipeId) : [...prev, recipeId]
    )
  }

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

  const displayRecipes = () => {
    const updatedRecipes = [];
    for (let i = 0; i < searchCriteria.length; i++) {
      const matchedRecipe = recipes.find((recipe) => recipe.recipeId === searchCriteria[i]);
      updatedRecipes.push(matchedRecipe);
    }
    setSelectedRecipes(updatedRecipes);
  }

  return (
    <div>
      <div className="search-recipes">
        <h2 className="title">Select one or more recipes</h2>
        <div className="recipe-options">
          {recipes.map(({ recipeId, name }) => (
            <label key={recipeId}>
              <input 
                type="checkbox" 
                checked={searchCriteria.includes(recipeId)}
                onChange={() => handleSelection(recipeId)}
                />
              {name[0] + name.slice(1).toLowerCase()}
            </label>
          ))}
        </div>
        <button onClick={displayRecipes} className="search-button">Search</button>
      </div>

      <div className="recipes-container">
        {selectedRecipes.map((recipe) => (
          <div key={recipe.recipeId} className="recipe-container">
            <img src={recipe.imageUrl} className="recipe-img"/>
            <h2>{recipe.name[0] + recipe.name.slice(1).toLowerCase()}</h2>
            <p>{recipe.description}</p>
            {recipe.prepTime && <p>Prep Time: {recipe.prepTime}</p>}
            {recipe.cookTime && <p>Prep Time: {recipe.cookTime}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
