import Logo from '/pages/img/logo-portfolio.webp'
import Image from 'next/image';

export default function Header() {

    return (
        <>
        <div className='flex z-10 mt-5 mb-2 flex-col'>
            <Image src={Logo} alt='hemeret logo' className='w-24'/>
        </div>
        <header className='flex rounded-3xl z-10 justify-center p-5'>
            <div className='flex justify-between items-center'>
                <ul className='flex gap-8 justify-end uppercase text-white font-thin'>
                    <li className='bg-black-200 p-3 rounded-2xl'><a href='#'>accueil</a></li>
                    <li className='bg-black-200 p-3 rounded-2xl'><a href='#'>à propos</a></li>
                    <li className='bg-black-200 p-3 rounded-2xl'><a href='#'>projet</a></li>
                    <li className='bg-black-200 p-3 rounded-2xl'><a href='#'>contact</a></li>
                </ul>
            </div>
        </header>
        </>
    );
}