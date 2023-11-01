import styled from "styled-components";

export const Container = styled.header`
	background-color: var(--shapes-01);
`;

export const Content = styled.div`
	max-width: 75rem;
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
	background-color: var(--background);
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
		color: var(--text-title);
		font-family: "Saira", sans-serif;
	}
`;
