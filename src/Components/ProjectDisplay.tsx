import { useState } from 'react'

const ProjectDisplay = (project: any) => {
	const [showOverlay, setShowOverlay] = useState(false)
	const imageSrc = typeof project.image === 'string' && !project.image.startsWith('/assets/')
		? `/assets/${project.image}`
		: project.image

	const handleCardClick = (e: React.MouseEvent) => {
		// Don't toggle if clicking on the "View project" button
		if ((e.target as HTMLElement).closest('a')) {
			return
		}
		setShowOverlay(!showOverlay)
	}

	return (
		<div 
			className="relative overflow-hidden rounded-xl shadow-lg ring-3 ring-purple-500/100 cursor-pointer group"
			onClick={handleCardClick}
		>
			<img
				src={imageSrc}
				alt={project.name}
				className="block w-full h-[380px] sm:h-[460px] object-cover rounded-lg"
			/>
			{/* Mobile overlay (no on hover, we use tapping instead) */}
			<div className="md:hidden absolute inset-0 transition-colors duration-300" style={{ backgroundColor: showOverlay ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)' }} />
			<div className="md:hidden absolute inset-0 flex items-center justify-center transition-opacity duration-300 p-6 text-center" style={{ opacity: showOverlay ? 1 : 0, pointerEvents: showOverlay ? 'auto' : 'none' }}>
				<div className="max-w-xl">
					<h3 className="text-xl sm:text-2xl font-semibold text-white">{project.name}</h3>
					<p className="mt-2 text-sm sm:text-base text-gray-200">{project.description}</p>
					<div className="mt-4">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block rounded border border-purple-500 px-5 py-2 text-purple-300 hover:bg-purple-500/20"
						>
							View project
						</a>
					</div>
				</div>
			</div>
			
			{/* Desktop overlay */}
			<div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-300" />
			<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
				<div className="max-w-xl">
					<h3 className="text-xl sm:text-2xl font-semibold text-white">{project.name}</h3>
					<p className="mt-2 text-sm sm:text-base text-gray-200">{project.description}</p>
					<div className="mt-4">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block rounded border border-purple-500 px-5 py-2 text-purple-300 hover:bg-purple-500/20"
						>
							View project
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDisplay


