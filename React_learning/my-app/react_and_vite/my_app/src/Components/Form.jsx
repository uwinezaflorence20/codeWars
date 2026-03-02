import React from "react";
import IngredintsList from "./IngredintsList";
import ClaudeRecipe from "./ClaudeRecipe";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

 
  const [recipeShown, setRecipeShown] = React.useState(false);
  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="text-black">
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="ml-80">Add ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredintsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}  />}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
