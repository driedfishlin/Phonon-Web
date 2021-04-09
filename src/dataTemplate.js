/* 檔案用途：統一管理資料結構並匯出 */

// For IntroSectionMain
import introCarouseImg_A from './image/_Temporary_pic/room/kara-eads-L7EwHkq1B2s-unsplash.jpg';
import introCarouseImg_B from './image/_Temporary_pic/room/kari-shea-tOVmshavtoo-unsplash.jpg';
import introCarouseImg_C from './image/_Temporary_pic/room/michael-oxendine-GHCVUtBECuY-unsplash.jpg';
import introCarouseImg_D from './image/_Temporary_pic/room/roberto-nickson-rEJxpBskj3Q-unsplash.jpg';
// For PhononSectionMain
import { ReactComponent as phononArtLogo } from './image/logo/phonon_art_logo.svg';
import { ReactComponent as phononCoffeeLogo } from './image/logo/phonon_cafe_logo.svg';
import { ReactComponent as phononMusicLogo } from './image/logo/phonon_music_logo.svg';

//SECTION> For MainNavigationBar
export const navListItem = [{ name: '琴房預約' }, { name: '餐點訂製' }];

//SECTION> For CommoditiesGroup
export const commoditiesInfo = {
	food: [
		//UNDONE> 圖片網址為暫時的假圖
		{
			nameTc: '飲品',
			nameEng: 'Drink',
			imgUrl:
				'./img/_Temporary_pic/food/maddi-bazzocco-5o4WVPa0qGQ-unsplash.jpg',
		},
		{
			nameTc: '糕點',
			nameEng: 'Cake',
			imgUrl:
				'./img/_Temporary_pic/food/corleto-peanut-butter-g0NcZr1eYbI-unsplash.jpg',
		},
		{
			nameTc: '布丁',
			nameEng: 'Pudding',
			imgUrl:
				'./img/_Temporary_pic/food/priyanka-singh-sZCcZFQ9Hrc-unsplash.jpg',
		},
		{
			nameTc: '餅乾',
			nameEng: 'Cookies',
			imgUrl: './img/_Temporary_pic/food/mae-mu-ppOPjqAJ3Mw-unsplash.jpg',
		},
	],
	room: [
		{
			nameTc: '個人琴房',
			nameEng: 'Personal Practice Room',
			imgUrl:
				'./img/_Temporary_pic/room/kara-eads-L7EwHkq1B2s-unsplash.jpg',
		},
		{
			nameTc: '室內樂琴房',
			nameEng: 'Chamber Music Practice Room',
			imgUrl:
				'./img/_Temporary_pic/room/kari-shea-tOVmshavtoo-unsplash.jpg',
		},
		{
			nameTc: '團練室',
			nameEng: 'Group Practice Room',
			imgUrl:
				'./img/_Temporary_pic/room/michael-oxendine-GHCVUtBECuY-unsplash.jpg',
		},
		{
			nameTc: '演奏廳',
			nameEng: 'Concert Hall',
			imgUrl:
				'./img/_Temporary_pic/room/roberto-nickson-rEJxpBskj3Q-unsplash.jpg',
		},
	],
};

//SECTION> For IntroSectionMain
export const introPageIntroSectionCarouselImg = {
	introSection: [
		introCarouseImg_A,
		introCarouseImg_B,
		introCarouseImg_C,
		introCarouseImg_D,
	],
	svgFilterBase64:
		'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWcluWxpF8yXzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODQyLjcgNTI4LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg0Mi43IDUyOC4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik02MS41LDEwMi43QzEyNSw1NCwxODcuNyw1NS44LDIzNi42LDY0LjdjMzkuNSw2LjIsNTgsMjAuNSwxMTYuMywyM2M4Ni40LDMuNywxNjkuOS0zNC40LDE5NS4zLTQ2CglDNTgzLjYsMjUuNiw1OTQsMTUuOCw2MjcsNy45YzktMi4yLDY0LjgtMTUuNiwxMTEuMS0xLjVjNzkuNCwyNC4zLDk1LjMsMTE4LjgsMTAxLDE1My4yYzQuMiwyNS4yLDIxLjQsMTUxLjEtODQuOCwyNDkuOAoJYy01MS40LDQ3LjgtMTA4LjQsNjcuNS0xNTMuNyw4Mi44Yy0zOS4xLDEzLjEtMjI1LjgsNzUuOC00MDEuOS0yLjlDMTY4LjksNDc2LjEsMTMuNCw0MDIuMywxLjIsMjY0LjEKCUMtMC43LDI0Mi40LTguMywxNTYuMiw2MS41LDEwMi43eiIvPgo8L3N2Zz4K',
};

//SECTION> for PhononSectionMain

export const phononDescription =
	'聲子是由一群有熱情理想的演奏者及行政團隊所組成，創立於 2000 年的擊樂團與 2005 年成立的管樂團是聲子最具專業演出水平的兩個音樂團隊。藝棧是聲子團隊中專責空間營運的部門，我們擁有經過專業音響學規劃設計的排練場和小型演奏廳，還有專業的琴房、擊樂練習室及視覺展覽空間。在活化空間的前提下， 2019 年成立了最新的咖啡事業部門，咖啡豆烘培的品質已得到不少咖啡愛好者的肯定。';

export const phononTeams = [
	{
		name: '聲子藝棧',
		description:
			'聲子藝棧藝文空間自詡為花蓮藝文推手，即是提供藝文團體或個人展演舞台的合作者，亦是花蓮人創造美感體驗的媒介。聲子藝棧藝文空間陸續推出精心策劃的視覺展覽及音樂展演，讓創作者、觀眾與聲子藝棧藝文空間，共同創造多元豐富的美的經驗。正如聲子藝棧的信念，「以愛為出發點，用音樂藝術關懷人」，因引進來自各地的音樂與視覺藝術，讓創作展演者與觀眾，在聲子藝棧相遇，碰撞出生命的滋味。',
		img: phononArtLogo,
	},
	{
		name: '聲子樂集',
		description:
			'2000 年夏天，由一群熱愛音樂的學生，成立了桃竹苗地區第一支打擊樂團隊「聲子樂擊室內樂團」，2005年聲子在花蓮地區催生了第二個團隊「聲子樂集管樂團」，結合了更多不同樂器的演奏者，一同散播音樂的種子。七年來，聲子樂集管樂團無論在演出頻率、內容、國際活動參與率上，在花蓮地區已經成為指標性的音樂團隊，並間接帶動花蓮地區管樂學習風氣。本著「以音樂藝術關懷人」的宗旨，藉著聲子，期使藝術專業成就能落實於生活、文化、信仰及社會關懷。',
		img: phononMusicLogo,
	},
	{
		name: '聲子咖啡',
		description:
			'將藝棧空間發揮最大效益，把現有的售票展演服務台延伸為咖啡吧，門廳變身成了咖啡廳，散發溫暖淡雅的氛圍。目前供應手沖單品、義式與美式，也有每日限量手作甜點，並有提供如信用卡、悠遊卡、行動支付等多元的支付方案。',
		img: phononCoffeeLogo,
	},
];

export const phononTeamInfoCardColor = ['#7E2DAA', '#D93178', '#FE7439'];

export const introPagePhononSectionCarouselImg = {
	imgs: [
		introCarouseImg_A,
		introCarouseImg_B,
		introCarouseImg_C,
		introCarouseImg_D,
	],
	svgFilterBase64:
		'data:image/svg+xml;base64,PHN2ZyBpZD0i5ZyW5bGkXzEiIGRhdGEtbmFtZT0i5ZyW5bGkIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ5OCAxMjk1Ij48cGF0aCBkPSJNNywxMTEzLjA4YzEuNzUsMjMuODQsNi45LDQzLjU3LDE2LjUzLDYzLjcsMTQuNiwzMC4zNCwzNC40LDQ4LjIxLDgyLjExLDc0LjIyLDIyLjEyLDEyLjExLDM2LjQ4LDE4LjI1LDUyLjE5LDIyLjUxLDI4LDcuNTUsNDguMTEsOC45Miw2Ny41Miw0LjI2LDQuOTMtMS4wOCw1LTEuMDgsOC40NSwyLjJBMjEuNDQsMjEuNDQsMCwwLDAsMjQ4LDEyODUuN2MzLjcuMDksMTUuMzgtMywyMC41NC01LjUzLDIuNzMtMS4zMyw2Ljk0LTEuNzQsMTktMS43NiwxMy4yMS0uMTksMTcuMzItLjYsMjcuMjgtMywxMi0yLjkyLDM1LjM2LTEwLjg4LDQ5LjEtMTYuNzZhNzUuMjgsNzUuMjgsMCwwLDEsOC4xNy0zLjEyYy40LDAsMSwxLjQzLDEuMzMsMywuODgsNS4yMiw1LjgzLDExLjczLDExLDE0LjM1LDguNyw0LjUxLDE5Ljc0LDIuODYsMjYtMy43LDYuNzYtNyw4LjMxLTE3LjcxLDMuNy0yNS45Mi0xLjQ0LTIuNjMtMy4yOC01LjE3LTQuMTctNS42OS0xLjE5LS43My0uMDYtMS45MSw1LjUzLTUuNzhhMTk2Ljg5LDE5Ni44OSwwLDAsMCw0Ni40Ny00NS43NGMxOS40NC0yNy40NSwyNy41OS01NS4xNywyOC40NS05Ni44Ni4zLTE3LjMuMTEtMjIuMTEtMS41OS0zMC41NS0zLjU3LTE4LjQ5LTE0LjktNTYuNDYtMjQuNDEtODItMy41OC05LjY5LTcuMTMtMjAuNTgtNy44NC0yNC4xOS0yLjMyLTEyLjM2LS45LTI2LjEzLDMuNjMtMzYuMTNsMi00LjU1LTMuOTUtNi42LTMuOTQtNi42OS01LjQ4LDMuMThjLTguODIsNS0yMC44Myw1LjIxLTMwLjQyLjQ5LTUuNjQtMi43My0xNi42OS0xMy42OS0yMi4yLTIxLjgyLTEwLjA2LTE0Ljg0LTE2Ljc2LTM2LjUtMjIuNzktNzMuOTUtMy4zMi0yMS0yLjQ0LTQxLjU2LDIuMjktNTEuNjYsNC04LjUxLDE1LjkyLTEzLjQzLDM4LjY4LTE1LjkxbDQuODEtLjQ4LDQuMy04LjMxLDQuMzktOC4yLTIuNTItMy40NmMtMy42OS01LTctMTIuNTYtOS4zMi0yMC45Mi0xLjg1LTYuNDQtMi04Ljg1LTEuMjctMTguNTNhMTc3Ljc1LDE3Ny43NSwwLDAsMSwzLjczLTIzYzYuMTktMjUuMjcsNi4zMS0yNi4xNiw3LjQyLTUyLjU0LDEuMTUtMjguMTkuNjctMzcuNS0zLjExLTUxLjU5LTUuNy0yMS43NC0xNC4wNi0zNi4zNC0zMC41Ny01My41Mi0yNS4zOS0yNi41LTU0LjU5LTQwLjA4LTEwMC40NS00Ni41NGwtMTQuMDYtMS45My4wOS0zLjc5QzI3Ny44OCw0NDMsMjczLDM0Mi4yMywyNjUsMTgwLjNjLS40Mi03LjcxLS45My0xNi4xMy0xLjA3LTE4LjgzbC0uNDktNC43MiwxNS42LjM3YzguOC4yLDE2LjUxLS4xMiwxNy41Mi0uNiwxLjUxLS43NiwyLjQxLS41NCwzLjg3LDFhMTIuNzEsMTIuNzEsMCwwLDEsMi4yMywzLjE1Yy4yOC45MSwxLjU5LjY0LDQuODMtMSwzLjk0LTEuOSw2LjM1LTIuMjUsMTcuMzUtMi4yOSwxMS42MS0uMTQsMTIuOTEtLjMxLDE0LjI2LTIuMTdhMTEsMTEsMCwwLDAsMS42Mi01LjE3Yy4xMy01LjYtLjY2LTYtMTMuMDYtNi4zLTEwLjQtLjI0LTExLjc5LS40OC0xNy41My0zLjMxLTUuMzQtMi42Mi02LjMzLTIuODUtOC0xLjY4LTEuMzMsMS4wNy01LjYzLDEuMTctMjAuOTIuNjEtMjIuMDktLjgxLTE5LjcyLjc1LTIwLjU4LTE0LjA4bC0uNS04LjgxLDEzLjM4LDFjNy4zOS41NywxNCwxLjUyLDE0LjY2LDIsLjg4LjgyLDEuNzkuNjQsMy4xMi0uNjMsMi44NS0yLjQzLDUuODItMS4wNyw2LjQzLDMsMS41OCw5LjQ0LDEyLjQ2LDE0Ljc5LDIxLjA2LDEwLjI5LDEwLjQzLTUuMzYsMTguMDUtMTQuODksMTguMTQtMjIuNzkuMDUtMTAuOC05Ljg5LTIyLjMzLTIwLjg1LTI0LjA5LTYuMTgtLjk0LTkuNDIuNTktMTIuOTQsNmE4NC4xMSw4NC4xMSwwLDAsMS01LjI4LDcuNDhjLTIuMTYsMi41NS0yLjM2LDIuNjQtMy41Mi45Mi0xLjA3LTEuNTMtMS42Ny0xLjU0LTMuODktLjU5LTEuNzIuNzYtNy45MiwxLTE3LC44bC0xNC4zLS4zMy0uNTUtNi41MWMtLjQ2LTUuODItLjI0LTYuNzEsMS43LTguNTdzMi4xNy0yLjg1LDEuODItOS4yNmMtLjMxLTMuOTEtLjcyLTgtMS05LjIyLS41Ni0xLjgyLS4yNS0yLDIuNDQtMS41NSw0LjI4LjcsOC45My0xLjI5LDEwLjgxLTQuODUsMi4zLTQsMy4yLTEyLjkzLDEuNzktMTYuNTYtMS4yMy0zLjIzLTYuMDYtNi4yNC0xMC4yNi02LjM0LTIuMi0uMDUtMi41OS0uNTYtMi41My0yLjg2LjEtNC42LTEuNzctMTAuMTQtMy43NC0xMS4yOWExMy43MywxMy43MywwLDAsMC01LTEuMTFjLTIuOC0uMDctMy0uMjctMi4yMy0yLjg2LDItNi45NS0uMjgtOS42MS0xMC4xMy0xMkMyMjYuNTYsMi43NiwyMjAsNS43MSwyMTkuNzMsMTYuODFjLS4xNCw1Ljg5LS4xNCw1Ljg5LTMsNS44My00LjktLjEyLTguMzgsMy42LTksOS40OWwtLjYyLDUuMDktNC41MS40OWMtNi4yMi42Ni04LjI1LDItMTAuNTYsNi42Ni0zLjU3LDcuNTItMi40MiwxMy44NSwzLjc2LDE5LjI5LDIuNTUsMi4xNiw0LDIuNyw3LjM0LDIuNDdsNC4yMS0uMi0uNjEsNC42OWMtLjc1LDYuMjgsMCw5LjEsMy40MSwxMi41OGwyLjgzLDMtMS4zMSwxMy40N2MtLjY3LDcuMzktMS4zMSwxMy40Ny0xLjQxLDEzLjU3cy05LjMxLjA5LTIwLjUxLS4wN2MtMTMuNi0uMTItMjAuNTktLjU4LTIxLjI3LTEuM3MtMi41OS0uNDYtNi41MywxLjE1Yy05LDMuNy0xNCw0LjM4LTIxLjY3LDIuOC04LjQ3LTEuNjktOS43OC0uOTItOS45NCw2LS4xNyw3LjEsMi4yLDguNDYsMTMuMjIsNy44MSw2LjkxLS4zNCw5LjYsMCwxNSwxLjc1LDMuNTgsMS4xOCw2Ljc0LDIuNjYsNy4xMywzLjI3czEuNTEtLjI3LDIuNjUtMmMxLjY2LTIuNjcsMi4zNy0zLjA1LDQuMTUtMi4zMSwxLjE5LjQzLDEwLjE4LDEuMjQsMTkuODcsMS41NmwxNy43OS44MS0uMzYsMTUuNC0uMzYsMTUuNS0xNS0uMzVjLTkuNS0uMjItMTUuODktLjc3LTE3LjU3LTEuNjEtMi4xOC0xLjA1LTIuNzgtMS4wNi0zLjkxLjQxcy0xLjM0LDEuNDctMy4xOS0uNjdhNDUuNzYsNDUuNzYsMCwwLDEtNC42My03LjExYy00LjQyLTgtNy4zOS05LjE4LTE3LjA2LTYuNi05LjI2LDIuNDktMTcuOSwxMy4wOS0xOC4yMSwyMi4xOS0uMjUsMTAuNTksMTMuNjIsMjUuMjIsMjQuMzEsMjUuNDdBMTQuNDcsMTQuNDcsMCwwLDAsMTY4LjQ1LDE4NGMuNzktNC4wOCwzLjgyLTUuMzEsNi41Ni0yLjc0LDEuMjcsMS4zMywyLjE3LDEuNTUsMy4wOC44Ny43Mi0uNTksNy45My0xLjEyLDE1Ljk0LTEuMzNsMTQuNjEtLjM3LjA4LDIyLjMxYy4xMiwxMi4zMS0uOSw3My41LTIuMjUsMTM2LjA5bC0yLjMzLDExMy42Ny04LjYuMmExMTIsMTEyLDAsMCwwLTE3LjE2LDIuMTFjLTE3LjQ5LDMuNjktNDcuNDgsMTYtNjIuNSwyNS40NkM5Ny41LDQ5Miw3OS4yOSw1MTMuODksNjguNjUsNTM3LjE1Yy04LjEyLDE3LjcyLTExLjQxLDM0LjU0LTExLDU3LjQ2LjIzLDE2LjMxLDEuNjMsMjQuOTQsMTEuNTMsNzIuMjksNC4xNCwyMC4xLDQuOTIsMjUuMTIsNC4zMiwyOS44LTEuMTEsOC44OC00LjQsMTYuOTEtMTAuNCwyNS42Ny0xLjY2LDIuMzYtMS41NiwyLjY2LDMuMTYsMTAuMzhDNzAsNzM5LDcxLjM0LDc0MC40Nyw3Mi43NSw3NDBjMTAuMy00LjA2LDE2LjgtNCwyNC43MS0uMTMsOSw0LjUxLDE1LDEyLjY1LDE3LjM3LDIzLjExLDUuOCwyNS45NCwzLDY5LjM5LTYuMjMsOTYuNTgtNy44NCwyMi45My0yMy4yOSw0Mi4zNy0zOSw0OS4xMS03LjM3LDMuMTMtMTkuNTcsMi42NS0yOC44OC0xLjI3YTY1LjUzLDY1LjUzLDAsMCwwLTctMi41NmMtLjExLjItMiwzLjQ1LTQuMTcsNy40bC00LDcsMy42LDQuMzljOS4xNSwxMS4yMSw4LjI2LDIzLjU5LTUuMDgsNzIuOC05LjYzLDM1LjM5LTEzLjE0LDUzLjExLTE1Ljg1LDc5LjU1QzcsMTA4OC42Nyw2LjM4LDExMDUuMjYsNywxMTEzLjA4WiIvPjwvc3ZnPg==',
};

//SECTION> for Footer

export const phononInformation = {
	tel: ' 03-832-4517',
	address: '花蓮縣花蓮市博愛街199號',
	facebook: 'https://www.facebook.com/phononartsncafe2020/',
	instagram: 'https://www.instagram.com/phononarts/',
	web:
		'https://phononmusic.wordpress.com/?fbclid=IwAR1mZDEflboNA6sagxNbob0KYLHTl8a_Di4h6oTWxsKPbARt1FBaUK7Kl44',
	email: 'phononarts@gmail.com',
	location: {
		lat: 23.977377,
		lon: 121.606267,
	},
	openingHoursDescription: '下午二時 - 晚上九時／週四公休',
	openingHours: [
		{
			week: '週一',
			hour: [14, 21],
		},
		{
			week: '週二',
			hour: [14, 21],
		},
		{
			week: '週三',
			hour: [14, 21],
		},
		{
			week: '週四',
			hour: null,
		},
		{
			week: '週五',
			hour: [14, 21],
		},
		{
			week: '週六',
			hour: [14, 21],
		},
		{
			week: '週日',
			hour: [14, 21],
		},
	],
};
