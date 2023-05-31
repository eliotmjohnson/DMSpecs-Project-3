import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={classes.header}>
			<h2 className={classes.title}>Devmountain Eatery</h2>
			<nav className={classes.nav}>
				<Link to="">
					<button>Home</button>
				</Link>
				<Link to="/newRecipe">
					<button>Add Recipe</button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
