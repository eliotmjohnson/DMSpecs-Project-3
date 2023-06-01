import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import classes from "./DetailScreen.module.css";

const DetailScreen = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://recipes.devmountain.com/recipes/${id}`)
			.then((res) => {
				setRecipe(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
		window.scrollTo(0, 0);
	}, [id]);

	return (
		<section>
			{recipe.recipe_id === +id && !isLoading ? (
				<>
					<div className={classes["ad-banner"]}>
						<img src={recipe.image_url} />
						<div className={classes["ad-content"]}>
							<h1>{recipe.recipe_name}</h1>
						</div>
					</div>
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
				</>
			) : (
				<h1 className={classes.loading}>Loading...</h1>
			)}
		</section>
	);
};

export default DetailScreen;
