/* 檔案用途：統一管理資料結構並匯出 */

// For IntroSectionMain
import introCarouseImg_A from './image/_Temporary_pic/room/kara-eads-L7EwHkq1B2s-unsplash.jpg';
import introCarouseImg_B from './image/_Temporary_pic/room/kari-shea-tOVmshavtoo-unsplash.jpg';
import introCarouseImg_C from './image/_Temporary_pic/room/michael-oxendine-GHCVUtBECuY-unsplash.jpg';
import introCarouseImg_D from './image/_Temporary_pic/room/roberto-nickson-rEJxpBskj3Q-unsplash.jpg';

//SECTION> For MainNavigationBar
export const navListItem = [
	{ name: '關於聲子' },
	{ name: '琴房預約' },
	{ name: '餐點訂製' },
];

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
