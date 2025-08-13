import Reveal from './Reveal'

const SkillsPage = () => {
	return (
		<section id="skills" className="bg-[#0A192F] text-white">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24">
				<div className="max-w-4xl mx-auto">
					<Reveal>
						<div className="flex items-center gap-4 mb-12">
							<span className="text-purple-500 font-semibold text-xl sm:text-2xl leading-none">02.</span>
							<h2 className="text-gray-200 font-bold text-2xl sm:text-3xl">Technologies I've worked with</h2>
							<div className="h-px bg-gray-700 flex-1" />
						</div>
					</Reveal>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
						<Reveal delayMs={150}>
						<div>
						<h3 className="text-purple-500 font-semibold mb-3">Frontend</h3>
						<ul className="space-y-2 text-gray-400">
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>JavaScript</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>TypeScript</li>
                            <li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>HTML</li>
                            <li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>CSS</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>React</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Svelte</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Tailwind</li>
						</ul>
						</div>
						</Reveal>

						<Reveal delayMs={300}>
						<div>
						<h3 className="text-purple-500 font-semibold mb-3">Backend</h3>
						<ul className="space-y-2 text-gray-400">
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Java</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Spring Boot</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Node.js</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Express.js</li>
                            <li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Scala</li>
                            <li  className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Kotlin</li>
						</ul> 
						</div>
						</Reveal>

						<Reveal delayMs={450}>
						<div>
						<h3 className="text-purple-500 font-semibold mb-3">Database/others</h3>
						<ul className="space-y-2 text-gray-400">
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>SQL</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>PostgreSQL</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>MongoDB</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Docker</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Jenkins</li>
							<li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Nginx</li>
                            <li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Git</li>
                            <li className="flex items-start gap-3"><svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><polygon points="0,0 10,5 0,10" /></svg>Linux</li>
						</ul>
						</div>
						</Reveal>
					</div>

				</div>
			</div>
		</section>
	)
}

export default SkillsPage