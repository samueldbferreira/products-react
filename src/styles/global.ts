import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root {
		--brand-blue: #115d8c;
		--brand-orange: #f25d27;
		--text-title: #123952;
		--text-body: #617480;
		--text-aux: #a0abb2;
		--shapes-01: #ffffff;
		--shapes-02: #dce2e5;
		--others-delete: #de3838;
		--others-green: #51b853;
		--others-green-low: #dcf5dd;
		--others-blue-low: #dde8f0;
		--others-orange-low: #ffa584;
		--others-yellow: #efb866;
		--background: #f5f8fa;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: var(--shapes-02);
	}

	input {
		font-size: 0.875rem;
	}
	
	button {
		cursor: pointer;
	}
`;
