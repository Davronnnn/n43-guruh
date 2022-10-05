import styled, { keyframes } from 'styled-components';

const HeaderStyles = styled.div`
	background-color: darkcyan;
	margin: 30px;
`;

const slide = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(100%) }
  100% { transform: translateX(0) }
`;

export const HeaderButton = styled.button`
	background-color: blue;
	padding: 10px;
	transition: all 1s ease;

	animation: ${slide} 2s ease-in-out infinite;
	&:hover {
		background-color: green;
	}
`;

export default HeaderStyles;
