import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products/:id" element={<Product />} />
					</Routes>
				</main>
			</BrowserRouter>
		</>
	);
};

export { App };
