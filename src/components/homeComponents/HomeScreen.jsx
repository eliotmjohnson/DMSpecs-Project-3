import React, { useEffect, useState } from "react";
import classes from "./HomeScreen.module.css";
import searchIcon from "../../assets/search-icon.png";
import { useGlobalState } from "../../state/StateManager";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipeCard from "./RecipeCard";

const HomeScreen = () => {
	const { state, dispatch } = useGlobalState();
	const [search, setSearch] = useState();

	useEffect(() => {
		axios
			.get("https://recipes.devmountain.com/recipes")
			.then((res) => {
				// console.log(res.data);
				dispatch({ type: "recipes fetched", data: res.data });
			})
			.catch((error) => console.log(error));
	}, [dispatch]);

	const recipeDisplay = state.recipes
		.filter((recipe, index) => {
			if (search) {
				let title = recipe.recipe_name.toLowerCase();
				let searchParams = search.toLowerCase().trim();
				return title.includes(searchParams);
			}
		})
		.map((recipe, index) => {
			return (
				<RecipeCard
					key={recipe.recipe_id}
					recipe={recipe}
					recipeId={recipe.recipe_id}
				/>
			);
		});

	return (
		<div>
			<AdBanner />
			<div className={classes["recipe-display"]}>
				<span className={classes["search-bar"]}>
					<img src={searchIcon} />
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search for a recipe"
					/>
				</span>
				<div className={classes.recipes}>
					{search && search.trim() !== ""
						? recipeDisplay
						: "Search for some recipes!"}
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
