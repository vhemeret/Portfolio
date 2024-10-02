import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Template from '../pages/img/next.webp'
import Irc from '../pages/img/ft_irc.webp'
import Inception from '../pages/img/inception.webp'
import Chinoflix from '../pages/img/Chinoflix.webp'
import Transcendence from '../pages/img/ft_transcendance.webp'
import Image, { StaticImageData } from 'next/image'
import truncate from '@/utils/utils'
import { Meteors } from './ui/meteors'

interface projectInterface {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    mainImage: StaticImageData;
    additionalImage: StaticImageData[];
}

function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<projectInterface | null>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
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

    const handleModal = (projectId: number) => {
        if (!isOpen) {
            const findProject = projects.find(p => p.id === projectId)
            setIsOpen(true)
            setSelectedProject(findProject || null)
        }
        else {
            setIsOpen(false)
            setSelectedProject(null)
        }
    }

    const projects: Project[] = [
        {
            id: 0,
            title: 'Web Monitor',
            description: "Application de surveillance des changements d'un sites web.",
            fullDescription: "Web Monitor est une application sophistiquée conçue pour surveiller en temps réel les performances des sites web. Utilisant Next.js et React pour une interface utilisateur réactive, et Node.js avec WebSocket pour des mises à jour en temps réel, cet outil permet aux développeurs et aux propriétaires de sites web de suivre des métriques cruciales telles que le temps de chargement, les erreurs serveur, et le trafic utilisateur. L'application offre des tableaux de bord personnalisables, des alertes configurables, et des rapports détaillés pour aider à optimiser les performances et l'expérience utilisateur des sites web surveillés.",
            mainImage: Template,
            additionalImage: [],
            technologies: "Next.js, React, Node.js, WebSocket",
            goal: "Fournir aux développeurs et aux propriétaires de sites web un outil pour surveiller et analyser les performances de leurs sites en temps réel."
        },
        {
            id: 1,
            title: 'Netflix Clone',
            description: "Réplique des fonctionnalités principales de Netflix.",
            fullDescription: "Ce clone de Netflix est une démonstration complète de compétences en développement full-stack. Construit avec React pour le front-end, il offre une interface utilisateur fluide et responsive, mimant l'expérience de navigation de Netflix. Le back-end, développé avec Node.js et Express, gère l'authentification des utilisateurs, le stockage des données dans MongoDB, et sert une API RESTful pour la communication avec le front-end. Le projet inclut des fonctionnalités telles que la recherche de contenu, la lecture vidéo, la gestion des profils utilisateurs, et des recommandations personnalisées basées sur l'historique de visionnage.",
            mainImage: Chinoflix,
            additionalImage: [],
            technologies: "React, Node.js, Express, MongoDB, API RESTful",
            goal: "Créer une plateforme de streaming vidéo similaire à Netflix pour démontrer des compétences en développement full-stack."
        },
        {
            id: 2,
            title: 'ft_transcendence',
            description: "Plateforme de jeu en ligne multijoueur avec chat intégré.",
            fullDescription: "ft_transcendence est une plateforme de jeu en ligne multijoueur centrée autour du jeu classique Pong. Développée avec Vue.js pour le front-end et NestJS pour le back-end, l'application offre une expérience de jeu en temps réel grâce à l'utilisation de WebSocket. Les joueurs peuvent participer à des matchs, communiquer via un système de chat intégré, et suivre leurs statistiques de jeu. L'application inclut également des fonctionnalités sociales comme l'ajout d'amis et la création de tournois. Avec une base de données PostgreSQL pour le stockage des données utilisateur et des scores, ft_transcendence démontre la capacité à construire une application web full-stack complexe et interactive.",
            mainImage: Transcendence,
            additionalImage: [],
            technologies: "Vue.js, NestJS, PostgreSQL, WebSocket",
            goal: "Développer une application web complexe intégrant un jeu multijoueur en temps réel, un système de chat, et des fonctionnalités sociales."
        },
        {
            id: 3,
            title: 'Inception',
            description: "Infrastructure de virtualisation pour applications web.",
            fullDescription: "Inception est un projet d'infrastructure qui utilise Docker pour créer un environnement de déploiement virtualisé pour des applications web. L'infrastructure comprend des conteneurs séparés pour NGINX (serveur web), MariaDB (base de données), et WordPress (application), tous orchestrés via Docker Compose. Ce projet met l'accent sur la sécurité, la performance et la portabilité, permettant un déploiement rapide et cohérent d'environnements de développement et de production. Il démontre la maîtrise des concepts de virtualisation, de la gestion des conteneurs, et des meilleures pratiques en matière d'architecture de microservices.",
            mainImage: Inception,
            additionalImage: [],
            technologies: "Docker, NGINX, MariaDB, WordPress, Docker Compose",
            goal: "Créer une infrastructure virtualisée pour héberger des applications web avec une configuration sécurisée et hautement disponible."
        },
        {
            id: 4,
            title: 'ft_irc',
            description: "Serveur IRC (Internet Relay Chat) personnalisé.",
            fullDescription: "ft_irc est une implémentation personnalisée d'un serveur IRC (Internet Relay Chat) en C++. Ce projet explore en profondeur les concepts de programmation réseau, utilisant des sockets TCP/IP pour gérer les connexions client-serveur. Il implémente le protocole IRC, permettant aux utilisateurs de se connecter, de rejoindre des canaux de discussion, et d'échanger des messages en temps réel. Le serveur gère plusieurs connexions simultanées grâce à une architecture multithreadée, démontrant une compréhension avancée de la programmation concurrente. ft_irc met en lumière les défis de la gestion d'état, de la synchronisation, et de la performance dans les applications réseau.",
            mainImage: Irc,
            additionalImage: [],
            technologies: "C++, Sockets TCP/IP, Multithreading",
            goal: "Implémenter un serveur IRC fonctionnel pour comprendre les protocoles de communication en réseau et la programmation concurrente."
        },
    ];

    return (
        <section className='flex pt-40 flex-col justify-center items-center' ref={ref}>
            <div className="absolute h-screen w-full bg-black-100 bg-grid-white/[0.04] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,1)_90%,black)]"></div>
            </div>


            <motion.div
                className='z-10 '
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h1
                    variants={itemVariants}
                    className='text-white md:text-3xl lg:text-4xl sm:text-xl font-bold'
                >
                    Une selection de mes <span className='text-purple'>projets..</span>
                </motion.h1>
            </motion.div>
            <div className='z-0 mt-20 flex flex-wrap justify-center items-center gap-14'>

                {projects.map((project) => (
                    <div key={project.id} onClick={() => handleModal(project.id)} className='p-4 w-3/5 sm:w-2/4 md:w-2/5 lg:w-2/6 xl:w-1/4 2xl:w-1/5 justify-center item-center bg-gradient-to-t from-black-200 to-black-100 rounded-3xl hover:scale-105 transition-all'>
                        <div className='flex flex-col'>
                            <Image className=" rounded-2xl" src={project.mainImage} alt={project.title} />
                        </div>
                        <div className='flex flex-col mt-10 text-white'>
                            <h4 className='font-medium tracking-widest'>{project.title}</h4>
                            <p className='font-thin'>
                                {truncate(project.description, 100)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {isOpen && selectedProject && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className='fixed flex justify-center items-center z-50 inset-0 bg-gray-900/70'>
                    <div
                        onClick={() => handleModal(selectedProject.id)}
                        className='fixed inset-0'
                    />
                    <div className='bg-gradient-to-t from-black-100/100 overflow-hidden to-black-100/70 w-1/2 h-auto rounded-3xl p-10 drop-shadow-2xl'>
                        <div className='text-white flex w-full flex-col'>
                            <Image className='rounded-2xl mb-3 z-50' src={selectedProject.mainImage} alt={selectedProject.title} />
                            <h1 className='font-bold text-xl ml-2 mb-2'>{selectedProject.title}</h1>
                            <p className='font-thin text-sm ml-2'>{selectedProject.fullDescription}</p>
                        </div>
                        <Meteors number={20} />
                    </div>
                </motion.div>
            )}
        </section>
    )
}

export default Projects