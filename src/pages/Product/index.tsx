import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { IProduct } from "../../interfaces/product";
import backSVG from "../../assets/back.svg";
import bagSVG from "../../assets/bag-light.svg";
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

export function Product() {
	const [data, setData] = React.useState<IProduct | null>(null);
	const { id } = useParams();

	React.useEffect(() => {
		const product = products.find((p) => p.id === Number(id)) || null;
		setData(product);
	}, [id]);

	return (
		data && (
			<Container>
				<Link to={"/"} className="back">
					<img src={backSVG} />
					<span>Voltar</span>
				</Link>
				<div className="content">
					<div className="photo">
						<img src={data.photo} />
					</div>

					<div className="info">
						<span className="category">{data.category}</span>

						<h1>{data.title}</h1>

						<span className="price">
							{new Intl.NumberFormat("pt-BR", {
								style: "currency",
								currency: "BRL",
							}).format(data.price)}
						</span>

						<p className="advertise">
							*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
							R$900,00.
						</p>

						<h2>DESCRIÇÃO</h2>
						<p>{data.description}</p>

						<button>
							<img src={bagSVG} />
							<span>ADICIONAR AO CARRINHO</span>
						</button>
					</div>
				</div>
			</Container>
		)
	);
}
