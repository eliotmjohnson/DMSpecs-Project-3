import classes from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = (props) => {
	const navigate = useNavigate();

	const handleClick = (id) => {
		navigate(`/recipe/${id}`);
	};

	return (
		<div className={classes["recipe-card"]}>
			<img src={`${props.recipe.image_url}`} />
			<h1>{props.recipe.recipe_name}</h1>
			<button onClick={(e) => handleClick(props.recipeId)}>See More</button>
		</div>
	);
};

export default RecipeCard;
