import { useState } from "react"
import ProjectDisplay from "./ProjectDisplay"
import Reveal from "./Reveal"

const projects = [
	{
		name: "TPX-site",
		description: "A modern web application for the Phantom Phoenix Discord gaming community, focused on League of Legends statistics and tournament tracking utilizing the Riot API.",
		image: "tpx1.PNG",
		link: "https://phantomphoenix.org/"
	}, 
	{
		name: "TPX-Gallery",
		description: "A modern gallery website for storing and sharing the best gaming moments from the Phantom Phoenix Organization Discord community.",
		image: "tpxgallery.PNG",
		link: "https://phantomphoenix.org/gallery"
	}, 
    {
		name: "TowerGame",
		description: "An Age of War inspired tower defence game.",
		image: "towergame.PNG",
		link: "https://github.com/Dijamg/TowerGame"
	}, 
]

const ProjectsPage = () => {
    const [index, setIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const total = projects.length

    const navigateTo = (nextIndex: number) => {
        setIsLoading(true)
        setTimeout(() => {
            setIndex(((nextIndex % total) + total) % total)	
            setTimeout(() => setIsLoading(false), 750)
        }, 180)
    }

    const goPrev = () => navigateTo(index - 1)
    const goNext = () => navigateTo(index + 1)
    const goTo = (i: number) => navigateTo(i)

    return (
		<section id="projects" className="bg-[#0A192F] text-white">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24">
				<div className="max-w-6xl mx-auto">
					<Reveal>
						<div className="flex items-center gap-4 mb-12">
							<span className="text-purple-500 font-semibold text-xl sm:text-2xl leading-none">03.</span>
							<h2 className="text-gray-200 font-bold text-2xl sm:text-3xl">Some of my personal projects</h2>
							<div className="h-px bg-gray-700 flex-1" />
						</div>
					</Reveal>
				</div>
				<Reveal delayMs={150}>
				<div className="mt-10 max-w-4xl mx-auto flex items-center gap-6">
					<button
						onClick={goPrev}
						disabled={isLoading}
						className={`text-purple-500 hover:text-purple-400 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
						aria-label="Previous project"
					>
						<svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
					</button>

					<div className="flex-1">
						{isLoading ? (
							<div className="flex items-center justify-center h-[380px] sm:h-[460px]">
								<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
							</div>
						) : (
							<ProjectDisplay {...projects[index]} />
						)}
					</div>

					<button
						onClick={goNext}
						disabled={isLoading}
						className={`text-purple-500 hover:text-purple-400 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
						aria-label="Next project"
					>
						<svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
					</button>
				</div>
				</Reveal>

				<Reveal delayMs={300}>
				<div className="mt-6 flex items-center justify-center">
					<div className="flex items-center gap-2">
                        {projects.map((p, i) => (
                            <button
                                key={p.name}
                                onClick={() => goTo(i)}
                                disabled={isLoading}
                                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
				</div>
				</Reveal>

				<Reveal delayMs={450}>
				<p className="mt-8 text-center text-sm text-gray-400">
					Rest of my personal projects, including this website, can be found from my
					{' '}
					<a href="https://github.com/Dijamg/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400">Github</a>.
				</p>
				</Reveal>
			</div>
		</section>
	)
}

export default ProjectsPage


