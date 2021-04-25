import styled from '@emotion/styled';
import NavMenuButton from './NavMenuButton';

const Container = styled.div`
	background: linear-gradient(120deg, #fcf7df, #fefdf9);
	height: 100%;
	width: 370px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
	border-radius: 30px 0 0 30px;
`;

const ListBlock = styled.div``;

// const Ul =

const NavSideMenu = () => {
	return (
		<>
			<Container>
				<NavMenuButton />
				<ListBlock></ListBlock>
			</Container>
		</>
	);
};

export default NavSideMenu;
