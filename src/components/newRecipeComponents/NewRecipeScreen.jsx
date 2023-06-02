import React from "react";
import axios from "axios";
import classes from "./NewRecipeScreen.module.css";
import { useState } from "react";
import { Formik } from "formik";

const NewRecipeScreen = () => {
	const [ingredients, setIngredients] = useState([]);
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState("");

	const initialValues = {
		type: "",
		recipeName: "",
		imageURL: "",
		prepTime: "",
		cookTime: "",
		serves: "",
		ingredients: [],
		instructions: "",
	};

	const addIngredient = () => {
		setIngredients([...ingredients, { name, quantity }]);
		setName("");
		setQuantity("");
	};

	const onSubmit = (values, { resetForm }) => {
		values.ingredients = ingredients;

		axios.post("https://recipes.devmountain.com/recipes", values);

		setIngredients([]);
		resetForm();
	};

	return (
		<section className={classes.createRecipe}>
			<h1>Tell us about your Recipe!</h1>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, handleChange, handleSubmit }) => (
					<form className={classes.form} onSubmit={handleSubmit}>
						<div className={classes.one}>
							<input
								type="text"
								placeholder="Name"
								value={values.recipeName}
								onChange={handleChange}
								name="recipeName"
							/>
							<input
								type="text"
								placeholder="Image URL"
								value={values.imageURL}
								onChange={handleChange}
								name="imageURL"
							/>
						</div>
						<div className={classes.two}>
							<span>
								<input
									type="radio"
									id="cook"
									value="Cook"
									onChange={handleChange}
									name="type"
								/>
								<label htmlFor="cook">Cook</label>
							</span>
							<span>
								<input
									type="radio"
									id="bake"
									value="Bake"
									onChange={handleChange}
									name="type"
								/>
								<label htmlFor="bake">Bake</label>
							</span>
							<span>
								<input
									type="radio"
									id="drink"
									value="Drink"
									onChange={handleChange}
									name="type"
								/>
								<label htmlFor="drink">Drink</label>
							</span>
						</div>
						<div className={classes.three}>
							<input
								type="text"
								placeholder="Prep Time"
								value={values.prepTime}
								onChange={handleChange}
								name="prepTime"
							/>
							<input
								type="text"
								placeholder="Cook Time"
								value={values.cookTime}
								onChange={handleChange}
								name="cookTime"
							/>
							<input
								type="text"
								placeholder="Serves"
								value={values.serves}
								onChange={handleChange}
								name="serves"
							/>
						</div>
						<div className={classes.four}>
							<section>
								<input
									type="text"
									placeholder="Ingredient"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									type="text"
									placeholder="Quantity"
									value={quantity}
									onChange={(e) => setQuantity(e.target.value)}
								/>
							</section>
							<ul>
								<h1>Ingredients:</h1>
								{ingredients.map((ingredient) => {
									return (
										<li key={ingredient.name}>
											{ingredient.quantity} {ingredient.name}
										</li>
									);
								})}
							</ul>
						</div>
						<button
							type="button"
							className={classes.orangeBtn}
							onClick={addIngredient}
						>
							Add Another
						</button>
						<textarea
							name="instructions"
							value={values.instructions}
							onChange={handleChange}
							placeholder="What are your instructions?"
							cols="30"
							rows="10"
							className={classes.textarea}
						></textarea>
						<button type="submit" className={classes.saveBtn}>
							Save
						</button>
					</form>
				)}
			</Formik>
		</section>
	);
};

export default NewRecipeScreen;
