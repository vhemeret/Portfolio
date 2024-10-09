import Logo from '/pages/img/logo-portfolio.webp'
import Image from 'next/image';
import { ChatBubbleOvalLeftIcon, ChevronUpIcon, FolderOpenIcon, HomeIcon, InformationCircleIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from 'react';


export default function Header() {
	const [showScrollToTop, setShowScrollToTop] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setShowScrollToTop(true);
			} else {
				setShowScrollToTop(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<div className='flex z-10 mt-5 mb-2 flex-col'>
				<Image src={Logo} alt='hemeret logo' className='w-24' />
			</div>

			<header className='flex rounded-3xl z-20 justify-center p-5'>

				<div className='hidden md:flex justify-between items-center'>
					<ul className='flex gap-8 text-white bg-black-200 rounded-3xl px-2 py-1'>
						<li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#home'>accueil</a></li>
						<li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#about'>à propos</a></li>
						<li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#projects'>projet</a></li>
						<li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#contact'>contact</a></li>
					</ul>
				</div>

				<div className='flex md:hidden justify-between items-center'>
					<ul className='flex gap-8 text-white bg-black-200 rounded-3xl cursor-pointer p-2 w-56 justify-center'>
						<a href='#home'><HomeIcon className='w-5 cursor-pointer hover:text-violet-900 transition-all duration-100' /></a>
						<a href='#about'><InformationCircleIcon className='w-5 cursor-pointer hover:text-violet-900 transition-all duration-100' /></a>
						<a href='#projects'><FolderOpenIcon className='w-5 cursor-pointer hover:text-violet-900 transition-all duration-100' /></a>
						<a href='#contact'><ChatBubbleOvalLeftIcon className='w-5 cursor-pointer hover:text-violet-900 transition-all duration-100' /></a>
					</ul>
				</div>

				{showScrollToTop && (
					<button className='fixed z-50 bottom-16 right-5 text-white' onClick={scrollToTop}>
						<ChevronUpIcon className='w-8 rounded-full bg-purple text-white hover:bg-violet-800 transition-all duration-300' />
					</button>
				)}

			</header>
		</>
	);
}