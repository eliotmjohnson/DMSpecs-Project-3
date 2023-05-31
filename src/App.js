import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StateProvider } from "./state/StateManager";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";

function App() {
	return (
		<StateProvider>
			<div className="App">
				<Header />
				<Routes>
					<Route index element={<HomeScreen />} />
					<Route path="newRecipe" element={<NewRecipeScreen />} />
					<Route path="recipe/:id" element={<DetailScreen />} />
				</Routes>
				<Footer />
			</div>
		</StateProvider>
	);
}

export default App;
