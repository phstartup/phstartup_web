"use client"
import React, {useState} from 'react';
import TextField from '@/components/form/text'
import Button from '@/components/buttons/btnRounded'
import { useRouter } from 'next/navigation';
import String from '@/utils/String'
import Right from '@/components/auth/Right';
import Social from '@/components/auth/Social';
import Api from '@/lib/api';

function page(props) {
	const router = useRouter();
	const [username, setUsername] = useState(null)
	const [errorUsername, setErrorUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [errorEmail, setErrorEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [errorPassword, setErrorPassword] = useState(null)
	const [cpassword, setCPassword] = useState(null)
	const [errorcPassword, setErrorCPassword] = useState(null)
	const [loading, setLoading] = useState(false)

	const validate = () => {
		submit()
	}

	const submit = async () => {
		let api = new Api()
		let data = {
			username,
			email,
			password
		}
		await api.post('/api/register', data, (response) => {
			console.log({
				response
			})
		}, (error) => {
			console.log({
				error
			})
		})
	}
	return (
		<div className='w-full h-[100vh] float-left'>
			{/* <Header /> */}
			<div className='bg-black dark:bg-white  h-[100vh] float-left text-black dark:text-white lg:w-1/4 2xl:w-[1/4] sm:w-full md:w-full xs:w-full'>
				<section className='mt-[250px] text-center lg:px-[20px] 2xl:px-[20px] sm:px-[50px] xs:px-[50px] md:px-[50px]'>
					<p className='text-lg text-white dark:text-black font-bold'>
						Register
					</p>

					<Social label="Signup" type="signup" />

					<span className='w-full h-[50px] float-left mt-[20px] text-white dark:text-black'>
						Already have an account?

					</span>
					<Button
						title="Login"
						style={" bg-white dark:bg-black text-black dark:text-white"}
						onClick={() => {
							router.push('/login')
						}}
					/>
				</section>
			</div>
			<Right
				title="Open & Free Startup Community"
				list={["Share your Pitch Deck", "Share your Services", "Grow your network", "Validate your ideas", "and more"]}
			/>
		</div>
	);
}

export default page;