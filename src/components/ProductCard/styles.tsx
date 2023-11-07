import styled from "styled-components";

export const Container = styled.div`
	a {
		height: 23rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;
		background-color: #ffffff;
	}

	.imgContainer {
		flex: 1;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.info {
		padding: 0.5rem 0.75rem;

		h2 {
			font-size: 1rem;
			line-height: 1.5;
			font-weight: 300;
		}

		hr {
			border: none;
			height: 1px;
			width: 100%;
			background-color: #dce2e5;
			margin: 0.5rem 0;
		}

		span {
			display: block;
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.5;
		}
	}
`;
