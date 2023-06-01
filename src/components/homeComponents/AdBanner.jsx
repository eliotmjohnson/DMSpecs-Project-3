import React from "react";
import classes from "./AdBanner.module.css";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
	return (
		<div className={classes["ad-banner"]}>
			<img src={salmon} />
			<div className={classes["ad-content"]}>
				<h3>New Recipe</h3>
				<h1>Pineapple Salmon</h1>
				<h3>
					This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
					brown sugar rub, baked for 25 minutes on a bed of pineapple, and
					garnished in butter, garlic, and chives. You won’t want to miss it!
				</h3>
				<Link to="/recipe/3">
					<button>Check it out</button>
				</Link>
			</div>
		</div>
	);
};

export default AdBanner;
