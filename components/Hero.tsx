import React from 'react'
import { Spotlight } from './ui/Spotlight'
import ShimmerButton from './ui/ShimmerButton'
import { motion } from 'framer-motion'

export default function Hero() {


	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};


	return (
		<section className="flex justify-center items-center pt-36 max-w-7xl" >

			<Spotlight
				className='
				sm:-end-[100px] sm:-top-[700px]
				md:-end-[300px] md:-top-[700px]
				lg:-end-[190px] lg:-top-[500px]
				-end-[100px] -top-[600px]
				'
				fill='purple'
			/>

			<div className="absolute h-screen w-full bg-black-100 bg-grid-white/[0.04] flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_top,transparent_20%,rgba(0,0,0,1)_70%,black)]"></div>
			</div>

			<div className="flex flex-col justify-center z-20">
				<motion.div className='text-white text-center space-y-10' variants={containerVariants} initial="hidden" animate="visible">
					<motion.p className='tracking-widest text-xs' variants={itemVariants}>Bonjour, je m&apos;appelle Valentin Hemeret 👋</motion.p>
					<motion.h1 className='text-4xl font-bold capitalize' variants={itemVariants}>De l&apos;école <span className='text-violet-300'>42</span> au monde professionnel</motion.h1>
					<motion.h2 className='text-xs uppercase tracking-widest' variants={itemVariants}>développeur junior passionné situé en région parisienne</motion.h2>
				</motion.div>
				<div className='flex justify-center'>
					<ShimmerButton title='Voir mes projets' />
				</div>
			</div>
		</section >
	)
}