import React from "react";
export default function Form() {
let [ingredients, setIngredients] = React.useState([])

    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    // function handleSubmit(event) {
    //        event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const newIngredient =formData.get("ingredient");
    //     console.log(newIngredient);
      

    //       setIngredients(fruit=>
    //         [...fruit,newIngredient])   
    // }
    function submitted(formData){
        const newIngredient =  formData.get("ingredient");
        setIngredients(prevIngredient =>[...prevIngredient,newIngredient])
        
    }
    
    return (
        <main>
            <form action={submitted} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="text-black"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}