import styled from "styled-components";

export const Container = styled.section`
	padding: 2rem 0;

	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #737380;
		margin-bottom: 5rem;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 2.5rem;
		text-transform: uppercase;
	}

	.sort {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		span {
			display: block;
			font-size: 0.875rem;
		}

		button {
			background: transparent;
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1.5rem 2rem;
	}
`;
