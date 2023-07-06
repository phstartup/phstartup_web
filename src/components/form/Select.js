import React from 'react';

function Select(props) {
    return (
        <div className="w-full float-left h-[50px]">
            {
                props.label && (
                    <span class="text-sm text-gray-900 dark:text-white h-[50px] font-bold">{props.label}</span>
                )
            }
            
            <select class="h-[50px] rounded-[25px] w-3/4 ml-[10px]  pl-[15px] mb-6 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    props.data && props.data.map((item, index) => (
                        <option selected={item.value == props.selected ? true : false} value={item.value}>{item.value}</option>
                    ))
                }
            </select>

        </div>
    );
}

export default Select;