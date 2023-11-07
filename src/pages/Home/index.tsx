import { NavLink } from "react-router-dom";
import downSVG from "../../assets/down.svg";
import { Container } from "./styles";
import { ProductCard } from "../../components/ProductCard";
import { IProduct } from "../../interfaces/product";
import canecaJPG from "../../assets/Caneca.jpg";

const products: IProduct[] = [
	{
		id: 1,
		category: "caneca",
		title: "Caneca de cerâmica rústica",
		photo: canecaJPG,
		price: 40.0,
		description:
			"Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
	},
	{
		id: 2,
		category: "caneca",
		title: "Caneca de cerâmica rústica",
		photo: canecaJPG,
		price: 40.0,
		description:
			"Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
	},
	{
		id: 3,
		category: "caneca",
		title: "Caneca de cerâmica rústica",
		photo: canecaJPG,
		price: 40.0,
		description:
			"Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
	},
	{
		id: 4,
		category: "caneca",
		title: "Caneca de cerâmica rústica",
		photo: canecaJPG,
		price: 40.0,
		description:
			"Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
	},
	{
		id: 5,
		category: "caneca",
		title: "Caneca de cerâmica rústica",
		photo: canecaJPG,
		price: 40.0,
		description:
			"Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.",
	},
];

const Home = () => {
	return (
		<Container>
			<div className="navbar">
				<nav>
					<NavLink to="/">Todos os Produtos</NavLink>
					<NavLink to="/">Camisetas</NavLink>
					<NavLink to="/">Canecas</NavLink>
				</nav>

				<a className="sort">
					<span>Organizar por</span>
					<button>
						<img src={downSVG} />
					</button>
				</a>
			</div>
			<div className="grid">
				{products.map((p) => (
					<ProductCard key={p.id} data={p} />
				))}
			</div>
			<div></div>
		</Container>
	);
};

export { Home };
