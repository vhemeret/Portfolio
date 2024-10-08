import React, { useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef } from 'react'
import Irc from '../pages/img/ft_irc.webp'
import Inception from '../pages/img/inception.webp'
import Chinoflix from '../pages/img/Chinoflix.webp'
import SoLong from '../pages/img/solong.webp'
import Minishell from '../pages/img/minishell.webp'
import Transcendence from '../pages/img/ft_transcendence.webp'
import Image, { StaticImageData } from 'next/image'
import { ThreeDCardDemo } from './3d-card'
import { XMarkIcon } from '@heroicons/react/20/solid'

interface projectInterface {
	id: number;
	title: string;
	description: string;
	fullDescription: string;
	technologies: string;
	mainImage: StaticImageData;
	additionalImage: StaticImageData[];
}

function Projects() {
	const titleRef = useRef(null)
	const isInView = useInView(titleRef, { once: true, amount: 0.1 })
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

	useEffect(() => {
		if (isOpen)
			document.body.classList.add('overflow-hidden')
		else {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	const projects: projectInterface[] = [
		// {
		//     id: 0,
		//     title: 'WebFlag',
		//     description: "Application de surveillance des changements d'un sites web.",
		//     fullDescription: "Web Monitor est une application sophistiquée conçue pour surveiller en temps réel les performances des sites web. Utilisant Next.js et React pour une interface utilisateur réactive, et Node.js avec WebSocket pour des mises à jour en temps réel, cet outil permet aux développeurs et aux propriétaires de sites web de suivre des métriques cruciales telles que le temps de chargement, les erreurs serveur, et le trafic utilisateur. L'application offre des tableaux de bord personnalisables, des alertes configurables, et des rapports détaillés pour aider à optimiser les performances et l'expérience utilisateur des sites web surveillés.",
		//     mainImage: Template,
		//     additionalImage: [],
		//     technologies: "Next.js, React, Node.js, WebSocket",
		//     goal: "Fournir aux développeurs et aux propriétaires de sites web un outil pour surveiller et analyser les performances de leurs sites en temps réel."
		// },
		{
			id: 1,
			title: 'Netflix Clone',
			description: "Réplique simple de l'interface utilisateur de Netflix.",
			fullDescription: "Ce clone de Netflix est une démonstration approfondie des compétences en développement front-end. Construit avec Next.js, il offre une interface utilisateur fluide et responsive, reproduisant fidèlement l'expérience de navigation de Netflix. Le projet utilise l'API TMDB pour récupérer les données des films et des séries TV, permettant ainsi d'afficher un contenu réel et à jour. Les fonctionnalités incluent l'affichage des films et série et la visualisation des détails des contenus. Ce projet met en évidence la capacité à travailler avec des API externes, à gérer l'état de l'application, et à créer une interface utilisateur moderne et interactive.",
			mainImage: Chinoflix,
			additionalImage: [],
			technologies: "#Next.js #TMDB-API #React"
		},
		{
			id: 2,
			title: 'ft_transcendence',
			description: "Plateforme de jeu en ligne multijoueur avec chat intégré.",
			fullDescription: "ft_transcendence est une plateforme de jeu en ligne multijoueur centrée autour du jeu classique Pong. Développée avec React pour le front-end et NestJS pour le back-end, l'application offre une expérience de jeu en temps réel grâce à l'utilisation de WebSocket. Les joueurs peuvent participer à des matchs, communiquer via un système de chat, et suivre leurs statistiques de jeu. L'application inclut également des fonctionnalités sociales comme l'ajout d'amis et l'invitation en partie. Avec une base de données PostgreSQL pour le stockage des données utilisateur et des scores.",
			mainImage: Transcendence,
			additionalImage: [],
			technologies: "#React #NestJS #PostgreSQL #WebSocket #Docker"
		},
		{
			id: 3,
			title: 'Inception',
			description: "Infrastructure de virtualisation pour applications web.",
			fullDescription: "Inception est un projet d'infrastructure qui utilise Docker pour créer un environnement de déploiement virtualisé pour des applications web. L'infrastructure comprend des conteneurs séparés pour NGINX (serveur web), MariaDB (base de données), et WordPress (application), tous orchestrés via Docker Compose. Ce projet met l'accent sur la sécurité, la performance et la portabilité, permettant un déploiement rapide et cohérent d'environnements de développement et de production. Il démontre la maîtrise des concepts de virtualisation, de la gestion des conteneurs, et des meilleures pratiques en matière d'architecture de microservices.",
			mainImage: Inception,
			additionalImage: [],
			technologies: "#Docker #Nginx #MariaDB #WordPress #Docker-Compose"
		},
		{
			id: 4,
			title: 'ft_irc',
			description: "Serveur IRC (Internet Relay Chat) personnalisé.",
			fullDescription: "ft_irc est une implémentation personnalisée d'un serveur IRC (Internet Relay Chat) en C++. Ce projet explore en profondeur les concepts de programmation réseau, utilisant des sockets TCP/IP pour gérer les connexions client-serveur. Il implémente le protocole IRC, permettant aux utilisateurs de se connecter, de rejoindre des canaux de discussion, et d'échanger des messages en temps réel. Le serveur gère plusieurs connexions simultanées grâce à une architecture multithreadée, démontrant une compréhension avancée de la programmation concurrente. ft_irc met en lumière les défis de la gestion d'état, de la synchronisation, et de la performance dans les applications réseau.",
			mainImage: Irc,
			additionalImage: [],
			technologies: "#C++ #Sockets TCP/IP #Multithreading"
		},
		{
			id: 5,
			title: 'Minishell',
			description: "Implémentation d'un shell simple, similaire à bash.",
			fullDescription: "Minishell est un projet qui consiste à créer un interpréteur de commandes simple, similaire à bash. Ce projet approfondit la compréhension des processus et des descripteurs de fichiers dans les systèmes Unix. Il implémente des fonctionnalités essentielles telles que l'affichage d'un prompt, la gestion de l'historique des commandes, la recherche et le lancement d'exécutables, la gestion des guillemets simples et doubles, les redirections et les pipes, la gestion des variables d'environnement, et le comportement des signaux. Le projet inclut également l'implémentation de commandes intégrées comme echo, cd, pwd, export, unset, env, et exit.",
			mainImage: Minishell,
			additionalImage: [],
			technologies: "#C #Unix"
		},
		{
			id: 6,
			title: 'SoLong',
			description: "Jeu 2D inspiré de \"The Hitchhiker's Guide to the Galaxy\".",
			fullDescription: "So Long est un projet de jeu 2D simple conçu pour explorer l'utilisation de textures, de sprites et d'éléments de gameplay de base. Inspiré par \"Le Guide du voyageur galactique\", ce jeu met en scène un dauphin essayant de s'échapper de la Terre après avoir mangé des poissons. Le jeu comprend la génération de cartes à partir de fichiers .ber, des mouvements fluides du personnage (W, A, S, D), la collecte d'objets, la recherche de sortie, la détection de collision avec les murs et un affichage graphique utilisant la bibliothèque MiniLibX. Ce projet démontre la compréhension des concepts de base du développement de jeux 2D, y compris la gestion des graphismes, la logique de jeu et l'interaction utilisateur.",
			mainImage: SoLong,
			additionalImage: [],
			technologies: "#C #MiniLibX"
		},
	];

	return (
		<>
			<section className='relative flex flex-col mt-30 justify-center items-center mt-40'>

				<div className="absolute inset-0 bg-black-100 bg-grid-white/[0.04] flex items-center justify-center">
					<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,1)_90%,black)]"></div>
				</div>

				<motion.div ref={titleRef} className='z-50 mb-20' variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
					<motion.h1 variants={itemVariants} className='text-white md:text-3xl lg:text-4xl sm:text-xl font-bold'>
						Une selection de mes <span className='text-purple'>projets..</span>
					</motion.h1>
				</motion.div>

				<div className='relative flex md:flex-row flex-wrap justify-center items-center gap-10'>

					{projects.map((project) => (
						<div key={project.id} onClick={() => handleModal(project.id)} className=''>
							<ThreeDCardDemo title={project.title} description={project.description} mainImage={project.mainImage} />
						</div>
					))}

				</div>

				{isOpen && selectedProject && (

					<motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className='fixed flex justify-center items-center z-50 inset-0 bg-gray-900/80 p-4'>
						<div onClick={() => handleModal(selectedProject.id)} className='fixed inset-0' />
						<div className=' relative group/card  hover:shadow-2xl hover:shadow-emerald-300/[0.1] bg-gradient-to-t from-black-100  w-auto sm:w-[30rem] h-auto rounded-xl p-6 '>
							<div className='text-white flex w-full flex-col'>
								<Image className='rounded-2xl mb-3 z-50' src={selectedProject.mainImage} alt={selectedProject.title} />
								<h1 className='font-bold text-xl ml-2 mb-2'>{selectedProject.title}</h1>
								<p className='font-thin text-sm ml-2'>{selectedProject.fullDescription}</p>
								<p className='font text-sm ml-2 mt-4 tracking-widest text-violet-400'>{selectedProject.technologies}</p>
								<div className='flex justify-center'>
									<button onClick={() => setIsOpen(false)} className=' px-2 py-1 rounded-xl mt-4 text-gray-500 hover:text-gray-600 transition-all cursor-pointer'>fermer</button>
								</div>
							</div>
						</div>
					</motion.div>

				)}

			</section>
		</>
	)
}

export default Projects