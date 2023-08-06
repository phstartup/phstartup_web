import React, { useState } from 'react';

function TextMovingLabel(props) {
    var date = new Date(Date.now() + (props.plus * 86400000));
    var month = '0' + (date.getMonth() + 1)
    var year = date.getFullYear()
    var nDate = date.getDate()
    var sDate = year + '-' + month + '-' + nDate
    const [iDate, setDate] = useState(sDate)
    return (
        <div className='relative z-0 w-full group'>
            <input

                type={props.type}
                name="moving_label"
                onChange={(e) => {
                    props.onChange(e.target.value)
                }}
                id="moving_label"
                value={props.value ? props.value : iDate}
                min={props.min ? props.min : null}
                max={props.max ? props.max : null}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

            />
            {
                props.label && (
                    <label
                        for="moving_label"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {
                            props.label
                        }
                    </label>
                )
            }

        </div>
    );
}

export default TextMovingLabel;