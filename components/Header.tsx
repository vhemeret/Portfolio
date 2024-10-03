import Logo from '/pages/img/logo-portfolio.webp'
import Image from 'next/image';
import { ChevronUpIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
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
            <header className='flex rounded-3xl z-10 justify-center p-5'>
                <div className='flex justify-between items-center'>
                    <ul className='flex gap-8 text-white bg-black-200 rounded-3xl cursor-pointer px-2 py-1'>
                        <li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#'>accueil</a></li>
                        <li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#'>à propos</a></li>
                        <li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#'>projet</a></li>
                        <li className='p-3 text-xs md:text-[15px] cursor-pointer hover:text-purple transition-all font-thin uppercase'><a href='#'>contact</a></li>
                    </ul>
                </div>
                {showScrollToTop && (
                    <button className='fixed z-50 bottom-5 right-5 text-white' onClick={scrollToTop}>
                        <ChevronUpIcon className='w-8 rounded-full bg-purple text-white hover:bg-violet-800 transition-all duration-300' />
                    </button>
                )}
            </header>
        </>
    );
}