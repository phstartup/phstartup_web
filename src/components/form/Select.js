import { useSession } from 'next-auth/react';
import React from 'react';


function Select(props) {
    const {data: session} = useSession()
    return (
        <div className="w-full float-left h-[50px]">
            {
                props.label && (
                    <span className="text-sm text-gray-900 dark:text-white h-[50px] font-bold">{props.label}</span>
                )
            }
            
            <select 
                onChange={(e) => {
                    props.onChange(e.target.value)
                }}
                disabled={props.disabled}
                className={"h-[50px] rounded-[25px] w-full text-sm text-gray-900 border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " + (session ? 'dark:bg-gray-900' : 'dark:bg-black')}>
                {
                    props.data && props.data.map((item, index) => (
                        <option 
                            key={index}
                            selected={item.value == props.selected ? true : false} 
                            value={item.value}>{item.value}</option>
                    ))
                }
            </select>

        </div>
    );
}

export default Select;