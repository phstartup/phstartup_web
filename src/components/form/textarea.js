import React from 'react';
import validator from './Validator';

function Textarea(props) {

    const validation = (e) => {
        const { validation } = props;
        let response = validator.validate(e.target.value, validation, validation.column);
        if (response === true) {
            this.props.onChange(e.target.value, null)
        } else {
            this.props.onChange(e.target.value, response)
        }
    }

    return (
        <div className='w-full float-left'>
            {
                props.label && (
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
                )
            }

            <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={props.placeholder}
                onChange={(e) => {
                    validation(e)
                }}>
            </textarea>

        </div>
    );
}

export default Textarea;