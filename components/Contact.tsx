import React, { useState } from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

export default function Contact() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
	const [response, setResponse] = useState<string | null>(null);

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			const response = await fetch('/api/send/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setResponse('Message envoyé avec succès !');
				reset();
			} else {
				setResponse('Une erreur est survenue. Veuillez réessayer.');
			}
		} catch (error) {
			console.error('Erreur:', error);
			alert('Une erreur est survenue. Veuillez réessayer.');
		}
	};

	return (
		<section id='contact' className='z-10 flex pt-40 flex-col justify-center items-center md:w-4/5 lg:w-3/5 xl:w-2/5'>
			<div className='text-white md:text-3xl lg:text-4xl sm:text-xl font-bold'>
				<h1>Contactez-moi <span className='text-purple'>!</span></h1>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='mt-20 flex gap-4 flex-col w-full justify-center p-2'>
				{errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
				<div className='gap-2 flex'>
					<div className='w-1/2'>
						<input
							className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-full'
							placeholder='nom *'
							{...register('name', { required: "Le nom est requis *" })}
						/>
					</div>
					<input
						className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-1/2'
						placeholder='tel'
						{...register('phone')}
					/>
				</div>
				{errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
				<div>
					<input
						className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-full'
						placeholder='e-mail *'
						{...register('email', {
							required: "L'email est requis *",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Adresse email invalide"
							}
						})}
					/>
				</div>
				{errors.message && <span className='text-red-500 text-sm'>{errors.message.message}</span>}
				<div>
					<textarea
						className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-full min-h-32'
						placeholder='message *'
						{...register('message', { required: "Le message est requis *" })}
					/>
				</div>
				{ response && (
					<p className='text-gray-700 text-sm'>{response}</p>
				)}
				<div className='flex justify-center'>
					<button type="submit" className=" mw-32 mt-5 md:mt-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Envoyer
					</button>
				</div>
			</form>
		</section>
	)
}
