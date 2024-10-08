import React from 'react'
import Image from 'next/image'
import Circle from '../pages/img/profil.webp'
import { TypewriterEffect } from './ui/typewriter-effect'

const About = () => {
    const words = [
        {
            text: '<h1>',
            className: "text-purple",
        },
        {
            text: "En",
            className: "text-white",

        },
        {
            text: "quelques",
            className: "text-white",

        },
        {
            text: "mots",
            className: "text-white",

        },
        {
            text: ":",
            className: "text-indigo-600",

        },
        {
            text: "</h1>",
            className: "text-purple",
        },
    ];

    return (
        <section id='about' className=' mt-40 flex flex-col justify-center items-center max-w-8xl '>
            <TypewriterEffect className='z-50' words={words} />
            <div className='flex flex-col justify-center items-center bg-gradient-to-b from-black-200 to-black-100 rounded-3xl  backdrop-filter backdrop-blur lg:w-2/4 p-10 mt-20 w-5/6 xl:w-2/5'>
                <div className="flex mb-10 items-center justify-center">
                    <Image src={Circle} alt='profil' className='w-48 rounded-full' />
                </div>
                <div className="lg:w-4/4 font-light flex flex-col justify-center text-white">
                    <h1 className='font-extrabold mb-2 tracking-widest '>À propos de moi</h1>
                    <p className='tracking-wide font-thin'>
                        Développeur junior de 22 ans, originaire de Dijon et basé en région parisienne, je suis passionné par l&apos;informatique depuis mon plus jeune âge. J&apos;ai d&apos;abord commencé par le design, où j&apos;ai appris à maîtriser la suite Adobe, avant de découvrir rapidement le monde de la programmation. En 2020, j&apos;ai obtenu un baccalauréat technologique STI2D avec une spécialisation en systèmes informatiques et numériques, mention assez bien. Suite à cela, j&apos;ai intégré l&apos;école 42 Paris après avoir réussi la piscine en novembre 2021. J&apos;y ai finalisé l&apos;ensemble des projets de mon tronc commun, ce qui m&apos;a permis de terminer ce parcours en 2023. J&apos;ai ensuite effectué un stage de six mois en tant que développeur fullstack chez Iliad (Free). Actuellement, je suis à la recherche d&apos;une alternance ou d&apos;un poste en CDI.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default About


