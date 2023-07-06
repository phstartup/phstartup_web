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
			<div className='bg-white dark:bg-black h-[100vh] float-left text-black dark:text-white lg:w-1/4 2xl:w-[20%] sm:w-full md:w-full xs:w-full'>
				<section className='mt-[150px] text-center lg:px-[20px] 2xl:px-[20px] sm:px-[50px] xs:px-[50px] md:px-[50px]'>
					<p className='text-lg text-black dark:text-white font-bold'>
						Login
					</p>

					<Social label="Continue" type="signin"
					/>

					<span className='w-full font-bold text-lg float-left mb-[20px]'>
						Or
					</span>

					<TextField
						type="text"
						placeholder="Username or Email Address"
						value={username}
						onChange={(username, errorUsername) => {
							setUsername(username)
							setErrorUsername(errorUsername)
						}}
						validation={{
							type: 'text_without_space',
							size: 2,
							column: 'Username',
							error: errorUsername
						}}
					/>

					<TextField
						type="password"
						placeholder="********"
						value={password}
						onChange={(password, errorPassword) => {
							setPassword(password)
							setErrorPassword(errorPassword)
						}}
						validation={{
							type: 'text_without_space',
							column: 'Password',
							size: 6,
							error: errorPassword
						}}
					/>

					<span
						onClick={() => {
							router.push('/forgetpassword')
						}}
						className='w-full h-[50px] float-left hover:font-bold cursor-pointer mt-[20px]'>
						Forget your password?
					</span>
					<Button
						title="Login"
						style={" bg-green-400 text-white"}
						onClick={() => {
							console.log("hello")
							localStorage.setItem('token', '123123131')
						}}
					/>

					<span className='w-full h-[50px] float-left mt-[20px]'>
						Don't have an account?
					</span>
					<Button
						title="Register"
						style={" dark:bg-white bg-black text-white dark:text-gray-900"}
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