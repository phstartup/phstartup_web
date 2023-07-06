import React from 'react';
import Color from '@/utils/Color'
function btnRounded(props) {
	return (
		<div
			onClick={() => {
				props.onClick()
			}}
			className={'w-full h-[50px] cursor-pointer content-center items-center float-left flex rounded-[25px] justify-center hover:cursor-pointer hover:font-bold ' + props.style}
		>
			{
				props.title
			}
		</div>
	);
}

export default btnRounded;