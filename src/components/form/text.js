import React from 'react';
import validator from './Validator';

function text(props) {
    const { validation, type } = props;

    const validations = (e) => {
        let response = validator.validate(e.target.value, validation, validation.column);
        if (response === true) {
            if (type === 'file') {
                props.onChange(e.target.files[0], null)
            } else {
                props.onChange(e.target.value, null)
            }
        } else {
            if (type === 'file') {
                props.onChange(e.target.files[0], response)
            } else {
                props.onChange(e.target.value, response)
            }
        }
    }

    return (
        <div>
            <input
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                disabled={props.disable ? props.disable : false}
                onChange={(e) => {
                    validations(e)
                }}
                className='w-full h-[50px] rounded-[25px] border-gray-300 dark:border-gray-600 text-black dark:text-white px-[10px] mb-[20px] bg-white dark:bg-gray-800'>
            </input>
            <div className='w-full'>
                {
                    props.validation && props.validation.error && (
                        <label className='text-red-600'><b>Oops!</b> {props.validation.error}</label>
                    )
                }
            </div>
        </div>
    );
}

export default text;