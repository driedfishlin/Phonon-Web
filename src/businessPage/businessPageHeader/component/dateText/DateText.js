/*
時間計時器，顯示執行當下的時間，每秒更新一次。
格式為 "yyyy 年 mm 月 dd 日　hh:mm"
*/

import React, { useState, useEffect } from 'react';

const DateText = () => {
	const [time, setTime] = useState(new Date());
	const [colonFlash, setColonFlash] = useState(true);

	useEffect(() => {
		setInterval(() => setTime(new Date()), 1000);
		setInterval(() => setColonFlash(prev => !prev), 500);
	}, []);
	return (
		<p>
			{time.getFullYear()} 年 {time.getMonth() < 10 ? '0' : ''}
			{time.getMonth() + 1} 月 {time.getDate() < 10 ? '0' : ''}
			{time.getDate()} 日{'　'}
			{time.getHours() < 10 ? '0' : ''}
			{time.getHours()}
			<span
				style={{
					opacity: colonFlash ? 1 : 0,
				}}
			>
				:
			</span>
			{time.getMinutes() < 10 ? '0' : ''}
			{time.getMinutes()}
		</p>
	);
};

export default DateText;
