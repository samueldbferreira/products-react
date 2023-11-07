import styled from "styled-components";

export const Container = styled.section`
	padding: 2rem 0;

	span {
		display: block;
	}

	.back {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-body);
		margin-bottom: 1.5rem;
	}

	.content {
		display: grid;
		grid-template-columns: 7fr 5fr;
		gap: 2rem;
		color: #41414d;
		min-height: 36.25rem;
	}

	.info {
		position: relative;
	}

	.photo {
		flex: 1;
		border-radius: 0.25rem;
		overflow: hidden;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.category {
		text-transform: capitalize;
		font-weight: 400;
		margin-bottom: 0.75rem;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 0.25rem;
		line-height: 1.5;
		font-weight: 300;
	}

	.price {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.5;
		color: #09090a;
		margin-bottom: 1.5rem;
	}

	.advertise {
		font-size: 0.75rem;
		margin-bottom: 3.625rem;
	}

	h2 {
		font-size: 1rem;
		line-height: 1.5;
		font-weight: 500;
		color: #737380;
		margin-bottom: 0.5rem;
	}

	.description {
		font-size: 0.875rem;
		font-weight: 400;
	}

	button {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0px;
		background-color: var(--brand-blue);
		width: 100%;
		border: none;
		border-radius: 0.25rem;
		padding: 0.625rem;

		span {
			display: block;
			color: #f5f5fa;
			font-weight: 500;
		}
	}
`;
