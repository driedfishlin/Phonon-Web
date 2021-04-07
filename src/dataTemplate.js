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
export const introPageCarouselImg = {
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
			'以藝棧現成空間發揮最大效益，把現有的售票展演服務台延伸為咖啡吧，將門廳變身咖啡廳，走溫暖淡雅風。配合藝棧開放時間，咖啡廳下午二時營業至晚間九時半，週四公休。目前供應手沖單品、義式與美式，也有每日限量手作甜點，並有提供如信用卡、悠遊卡、行動支付等多元的支付方案。',
		img: phononCoffeeLogo,
	},
];

export const phononTeamInfoCardColor = ['#7E2DAA', '#D93178', '#FE7439'];
