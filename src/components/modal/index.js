import React from 'react';
import Button from '@/components/buttons/btn'

function Main(props) {
    return (
        <div id="large-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full items-center content-center justify-center flex modal">
            <div className="relative w-full max-w-4xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
                    <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {
                                props.title
                            }
                        </h3>
                        <button
                            onClick={() => {
                                props.onClose()
                            }}
                            type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {
                            props.content ? props.content() : null
                        }
                    </div>
                    {
                        props.footer && (
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                {
                                    props.footer()
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;