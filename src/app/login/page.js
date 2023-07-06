"use client"
import React, { useState } from 'react';
import String from '@/utils/String'
import Button from '@/components/buttons/btnRounded'
import { useRouter } from 'next/navigation'
import Right from '@/components/auth/Right';
import Social from '@/components/auth/Social';
import { useSession } from "next-auth/react"
import TextField from '@/components/form/text'

function page(props) {
	const router = useRouter()
	const { data: session } = useSession()
	const [username, setUsername] = useState(null)
	const [errorUsername, setErrorUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [errorPassword, setErrorPassword] = useState(null)
	return (
		<div className='w-full h-[100vh] float-left'>
			{/* <Header /> */}
			<div className='bg-black dark:bg-white h-[100vh] float-left text-black dark:text-white lg:w-1/4 2xl:w-[1/4] sm:w-full md:w-full xs:w-full'>
				<section className='mt-[250px] text-center lg:px-[20px] 2xl:px-[20px] sm:px-[50px] xs:px-[50px] md:px-[50px]'>
					<p className='text-lg text-black dark:text-white font-bold'>
						Login
					</p>

					<Social label="Continue" type="signin"
					/>

					<span className='w-full h-[50px] float-left mt-[20px]'>
						Don't have an account?
					</span>
					<Button
						title="Register"
						style={" bg-black dark:bg-white text-white dark:text-black "}
						onClick={() => {
							console.log('[asdfasdfasdf]')
							router.push('/register')
						}}
					/>
				</section>
			</div>
			<Right
				title="Open & Free Startup Community"
				list={["Share your Pitch Deck", "Grow your network", "Validate your ideas", "and more"]}
			/>
		</div>
	);
}

export default page;