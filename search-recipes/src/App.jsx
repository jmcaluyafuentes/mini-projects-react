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
    // console.log(searchCriteria);
    console.log(selectedRecipes)
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

  const displayRecipes = () => {
    const updatedRecipes = [];
    // console.log(searchCriteria)
    for (let i = 0; i < searchCriteria.length; i++) {
      // console.log(searchCriteria[i])
      const matchedRecipe = recipes.find((recipe) => recipe.recipeId === searchCriteria[i]);
      updatedRecipes.push(matchedRecipe);
    }
    setSelectedRecipes(updatedRecipes);
  }

  return (
    <div>
      <h2 className="title">Select one or more recipes</h2>
      <div className="recipe-options">
        {recipes.map(({ recipeId, name }) => (
          <label key={recipeId}>
            <input 
              type="checkbox" 
              value={name}
              checked={searchCriteria.includes(recipeId)}
              onChange={() => handleSelection(recipeId)}
              />
            {name}
          </label>
        ))}
      </div>
      <button onClick={displayRecipes}>Search</button>
      <div className="recipes-container">
        {selectedRecipes.map((recipe) => (
          <div key={recipe.recipeId} className="recipe-container">
            <img src={recipe.imageUrl} className="recipe-img"/>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            {recipe.prepTime ? <p>Prep time: {recipe.prepTime}</p> : null}
            {recipe.cookTime ? <p>Prep time: {recipe.cookTime}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
