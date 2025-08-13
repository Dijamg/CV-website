import Reveal from './Reveal'

const frontendSkills = [
	"JavaScript",
	"TypeScript", 
	"HTML",
	"CSS",
	"React",
	"Svelte",
	"Tailwind"
]

const backendSkills = [
	"Java",
	"Spring Boot",
	"Node.js",
	"Express.js",
	"Scala",
	"Kotlin"
]

const otherSkills = [
	"SQL",
	"PostgreSQL",
	"MongoDB",
	"Docker",
	"Jenkins",
	"Nginx",
	"Git",
	"Linux"
]

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
					<div className="grid grid-cols-3 gap-4 md:gap-8 text-gray-300">
						<Reveal delayMs={150}>
						<div>
						<h3 className="text-purple-500 font-semibold mb-3">Frontend</h3>
						<ul className="space-y-2 text-gray-400">
							{frontendSkills.map((skill, index) => (
								<li key={index} className="flex items-start gap-3">
									<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
										<polygon points="0,0 10,5 0,10" />
									</svg>
									{skill}
								</li>
							))}
						</ul>
						</div>
						</Reveal>

						<Reveal delayMs={300}>
						<div>
						<h3 className="text-purple-500 font-semibold mb-3">Backend</h3>
						<ul className="space-y-2 text-gray-400">
							{backendSkills.map((skill, index) => (
								<li key={index} className="flex items-start gap-3">
									<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
										<polygon points="0,0 10,5 0,10" />
									</svg>
									{skill}
								</li>
							))}
						</ul> 
						</div>
						</Reveal>

						<Reveal delayMs={450}>
						<div>
						<h3 className="text-purple-500 font-semibold mb-3">Database/others</h3>
						<ul className="space-y-2 text-gray-400">
							{otherSkills.map((skill, index) => (
								<li key={index} className="flex items-start gap-3">
									<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
										<polygon points="0,0 10,5 0,10" />
									</svg>
									{skill}
								</li>
							))}
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