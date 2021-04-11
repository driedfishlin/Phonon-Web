import styled from '@emotion/styled';

import { commoditiesList } from '../../../dataTemplate';

const Container = styled.div`
	max-width: 500px;
	min-height: 200px;
`;

const ImgBlock = styled.div`
	height: 200px;
	width: 70%;
	overflow: hidden;
	// display: flex;

	& > img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;

const TextBlock = styled.div`
	width: 30%;
`;

const Card = () => {
	return (
		<Container>
			<ImgBlock>
				<img src={commoditiesList.room[0].pic} />
			</ImgBlock>
			<TextBlock></TextBlock>
		</Container>
	);
};

export default Card;
