import styled from '@emotion/styled';
import { css } from '@emotion/css';

const Container = styled.div`
	cursor: pointer;
	width: 50px;
	height: 50px;
	position: absolute;
	top: 47px;
	left: 35px;
	transition: transform 0.4s;
`;

const Button = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 8px 3px;
	@media (max-height: 820px) {
		transform: scale(0.6) translate(-30px, -20px);
	}
`;

const Element = styled.div(({ page, isOpen }) => ({
	position: 'relative;',
	background: isOpen ? 'black' : page % 2 === 0 ? 'black;' : 'white',
	height: '5px;',
	margin: '3px;',
	borderRadius: '30px;',
	transition: 'background 0.4s',
	// `
	// 	position: relative;
	// 	background: black;
	// 	height: 5px;
	// 	margin: 3px;
	// 	border-radius: 30px;
	// `;
}));

const NavMenuButton = ({ propClass, page, clickFn, isOpen }) => {
	return (
		<Container className={isOpen ? null : propClass}>
			<Button onClick={clickFn}>
				<Element
					page={page}
					isOpen={isOpen}
					className={
						isOpen
							? css`
									transform: rotate(50deg);
									width: 27px;
									left: 17px;
									top: 3px;
							  `
							: null
					}
				/>
				<Element page={page} isOpen={isOpen} />
				<Element
					page={page}
					isOpen={isOpen}
					className={
						isOpen
							? css`
									transform: rotate(-50deg);
									width: 27px;
									left: 17px;
									top: -3px;
							  `
							: null
					}
				/>
			</Button>
		</Container>
	);
};

export default NavMenuButton;
