import styled from '@emotion/styled';
import { css } from '@emotion/css';

const Container = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 40px;
	left: 35px;
`;

const Button = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 8px 3px;
`;

const Element = styled.div`
	position: relative;
	background: black;
	// width: 100%;
	height: 5px;
	margin: 3px;
	border-radius: 30px;
`;

const NavMenuButton = page => {
	return (
		<Container>
			<Button>
				<Element
					className={css`
						transform: rotate(50deg);
						width: 27px;
						left: 17px;
						top: 3px;
					`}
				/>
				<Element />
				<Element
					className={css`
						transform: rotate(-50deg);
						width: 27px;
						left: 17px;
						top: -3px;
					`}
				/>
			</Button>
		</Container>
	);
};

export default NavMenuButton;
