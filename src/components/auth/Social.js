import React from 'react';
import GoogleBtn from '@/components/auth/GoogleBtn';
import FacebookBtn from '@/components/auth/FacebookBtn';
import { signIn } from 'next-auth/react';

function Social(props) {

    const handler = (channel) => {
        signIn(channel, {callbackUrl: `${window.location.origin}/dashboard`})
    }
    return (
        <div className="w-full float-left mb-[20px] mt-[20px]">
            <div
                onClick={() => {
                    handler('google')
                }}
                className='w-full float-left'>
                <GoogleBtn
                    label={props.label + " as Google"}
                    />
            </div>

            {/* <div
                onClick={() => {
                    handler('facebook')
                }}
                className='w-full float-left mt-[20px]'>
                <FacebookBtn
                    label={props.label + " as Facebook"} />
            </div> */}
        </div>
    );
}

export default Social;