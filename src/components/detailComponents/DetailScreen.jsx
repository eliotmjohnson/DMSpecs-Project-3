import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import classes from "./DetailScreen.module.css";
import pancakes from "../../assets/Fluffy-Pancakes.jpeg";

const DetailScreen = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
			console.log(res.data);
			setRecipe(res.data);
		});
	}, [id]);

	return (
		<section>
			<div
				className={classes["ad-banner"]}
				style={{
					background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
					backgroundSize: "cover",
				}}
			>
				<div className={classes["ad-content"]}>
					<h1>{recipe.recipe_name}</h1>
				</div>
			</div>
			{recipe.recipe_id === +id ? (
				<main className={classes["recipe-section"]}>
					<div className={classes["detail-card"]}>
						<h1>Recipe</h1>
						<div className={classes.firstDiv}>
							<p>Prep Time: {recipe.prep_time}</p>
							<p>Cook Time: {recipe.cook_time}</p>
							<p>Serves: {recipe.serves}</p>
						</div>
						<h1>Ingredients</h1>
						<ul>
							{recipe.ingredients &&
								recipe.ingredients.map((ing, index) => {
									return (
										<li key={index}>
											{ing.quantity} {ing.ingredient}
										</li>
									);
								})}
						</ul>
					</div>
					<div className={classes["detail-card"]}>
						<h1>Instructions</h1>
						<p style={{ whiteSpace: "pre-wrap" }}>
							{recipe.instructions && JSON.parse(recipe.instructions)}
						</p>
					</div>
				</main>
			) : undefined}
		</section>
	);
};

export default DetailScreen;
