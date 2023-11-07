import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { Container } from "./styles";

interface ProductCardProps {
	data: IProduct;
}

const ProductCard = ({ data }: ProductCardProps) => {
	return (
		<Container>
			<Link to={`products/${data.id}`}>
				<div className="imgContainer">
					<img src={data.photo} />
				</div>
				<div className="info">
					<h2>{data.title}</h2>
					<hr />
					<span>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(data.price)}
					</span>
				</div>
			</Link>
		</Container>
	);
};

export { ProductCard };
