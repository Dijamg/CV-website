const ProjectDisplay = (project: any) => {
	const imageSrc = typeof project.image === 'string' && !project.image.startsWith('/assets/')
		? `/assets/${project.image}`
		: project.image

	return (
		<div className="relative group overflow-hidden rounded-xl shadow-lg ring-1 ring-purple-500/30">
			<img
				src={imageSrc}
				alt={project.name}
				className="block w-full h-[380px] sm:h-[460px] object-cover"
			/>
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


