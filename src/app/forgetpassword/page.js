"use client"
import React, {useState} from 'react';
import TextField from '@/components/form/text'
import Button from '@/components/buttons/btnRounded'
import { useRouter } from 'next/navigation';
import Right from '@/components/auth/Right';

function page(props) {
	const router = useRouter();
	const [username, setUsername] = useState(null)
	const [errorUsername, setErrorUsername] = useState(null)
	return (
		<div className='w-full h-[100vh] float-left'>
			{/* <Header /> */}
			<div className='bg-gray-100 dark:bg-gray-800 h-[100vh] float-left text-black dark:text-white lg:w-1/4 2xl:w-[20%] sm:w-full md:w-full xs:w-full'>
				<section className='mt-[150px] text-center lg:px-[20px] 2xl:px-[20px] sm:px-[50px] xs:px-[50px] md:px-[50px]'>
					<p className='text-m text-black dark:text-white font-bold mb-[50px]'>
						Forget Password
					</p>
					<TextField
						type="text"
						placeholder="Username or Email Address"
						value={username}
						onChange={(username, errorUsername) => {
							setUsername(username)
							setErrorUsername(errorUsername)
						}}
						validation={{
							type: 'text',
							size: 8,
							column: 'Email Address',
							error: errorUsername
						}}
					/>

					<Button
						title="Send Request"
						style={" bg-green-400 text-white"}
						onClick={() => {
							//
						}}
					/>

					<span className='w-full h-[50px] float-left mt-[50px]'>
						Already have an account?
					</span>

					<Button
						title="Login"
						style={" bg-black text-white"}
						onClick={() => {
							router.push('/login')
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