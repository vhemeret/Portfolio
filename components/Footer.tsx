import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



export default function Footer() {

	return (
		<footer className="absolute z-10 bottom-0 h-auto w-screen bg-gray-950 flex justify-center items-center py-1">
			<div className='flex  flex-col p-2 justify-center items-center space-y-2 inset-0 '>
				<div className='flex flex-row gap-2'>
					<a href='/cv.pdf' target='_blank' rel="noopener noreferrer" >
						<p className='text-slate-700 cursor-pointer text-xs md:text-base hover:underline'>Mon Cv</p>
					</a>
					<p className='text-slate-700 text-xs md:text-base'>|</p>
					<a href='/' target='_blank' rel="noopener noreferrer">
						<p className='text-slate-700 cursor-pointer text-xs md:text-base hover:underline'>Mentions Légales</p>
					</a>
				</div>
				<div className='flex flex-row gap-2'>
					<a href='https://github.com/vhemeret' target='_blank' rel="noopener noreferrer">
						<FaGithub className='text-slate-700 cursor-pointer' />
					</a>
					<a href='https://www.linkedin.com/in/valentin-hemeret-327819250/' target='_blank' rel="noopener noreferrer">
						<FaLinkedinIn className='text-slate-700 cursor-pointer' />
					</a>
				</div>
				<div className='flex flex-row gap-2'>
					<p className='text-slate-700 text-xs '>© Copyright 2024 Hemeret Valentin. Tous droits réservés.</p>
				</div>

			</div>
		</footer>
	)
}