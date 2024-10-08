"use client"
import String from '@/utils/String';
import React from 'react';

function Simple(props) {
    return (
        <div className='w-full h-[50vh] flex items-center content-center justify-center'>
            <div>
                <h1 className='text-center text-6xl font-bold'>Help us build this feature.</h1>

                <br />
                <br />
                <h2 className='text-center font-bold text-lg'>
                    {
                        "Feature: " + props.title
                    }
                </h2>
                <p className='text-center'>
                    {
                        props.description
                    }
                </p>
                <br />
                <br />
                <br />
                <p className='text-center'>
                    Join our WhatsApp group:
                </p>
                <p className='text-center'>
                    {
                        String.whatsApp
                    }
                </p>
            </div>
        </div>
    );
}

export default Simple;