import { Container, Content, SearchBar } from "./styles";
import logoSVG from "../../assets/logo.svg";
import searchSVG from "../../assets/search.svg";
import bagSVG from "../../assets/bag.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Container>
			<Content>
				<Link to={"/"}>
					<img src={logoSVG} alt="Capputeeno" />
				</Link>

				<div className="items">
					<SearchBar>
						<input type="text" placeholder="Procurando por algo específico?" />
						<button>
							<img src={searchSVG} alt="Search" />
						</button>
					</SearchBar>

					<button className="bag">
						<img src={bagSVG} alt="Sacola" />
					</button>
				</div>
			</Content>
		</Container>
	);
};

export { Header };
