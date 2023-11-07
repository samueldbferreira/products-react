import styled from "styled-components";

export const Container = styled.header`
	background-color: #ffffff;
`;

export const Content = styled.div`
	max-width: 70rem;
	margin: 0 auto;
	padding: 1.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.items {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.bag {
		display: flex;
		background: transparent;
		border: none;
	}
`;

export const SearchBar = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	background-color: #f3f5f6;
	border-radius: 0.5rem;
	width: 20rem;

	button {
		background: transparent;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		border: none;
		outline: none;
		background-color: transparent;
		flex: 1;
		color: #737380;
		font-family: "Saira", sans-serif;
	}
`;
