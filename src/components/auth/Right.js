import React from 'react';
import MovingLogo from './MovingLogo';
function Right(props) {
    return (
        <div className='bg-white dark:bg-black h-[100vh] float-left text-black dark:text-white lg:w-3/4 2xl:w-[3/4] sm:w-full md:w-full xs:w-full'>
            <div className='flex items-center content-center h-[100vh] w-full px-[50px]'>
                <section>
                    <p className='text-6xl text-black dark:text-white font-bold w-full float-left'>{props.title}</p>
                    <ul className='text-2xl text-black dark:text-white w-full float-left mt-[50px] list-disc pl-[50px]'>
                        {
                            props.list && props.list.map((item, index) => (
                                <li 
                                    key={index}
                                    className='float-left w-full'>{item}</li>
                            ))
                        }
                        
                    </ul>
                </section>
            </div>
            
        </div>
    );
}

export default Right;