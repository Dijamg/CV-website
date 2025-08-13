import Reveal from './Reveal'

const AboutPage = () => {
	return (
		<section id="about" className="bg-[#0A192F] text-white">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24 w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
					<Reveal className="md:col-span-2">
						<div className="space-y-4 text-gray-400">
							<div className="flex items-center gap-4 mb-6">
								<span className="text-purple-500 font-semibold text-xl sm:text-2xl leading-none">01.</span>
								<h3 className="text-gray-200 font-bold text-2xl sm:text-3xl">About Me</h3>
								<div className="h-px bg-gray-700 flex-1" />
							</div>
						<Reveal delayMs={150}>
						<ul className="space-y-2 text-gray-300">
							<li className="flex items-start gap-3">
								<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
									<polygon points="0,0 10,5 0,10" />
								</svg>
								<span><span className="text-purple-500">Name:</span> <span className="text-gray-400">Dijam Goran</span></span>
							</li>
							<li className="flex items-start gap-3">
								<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
									<polygon points="0,0 10,5 0,10" />
								</svg>
								<span><span className="text-purple-500">Birthday:</span> <span className="text-gray-400">4.4.1997</span></span>
							</li>
							<li className="flex items-start gap-3">
								<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
									<polygon points="0,0 10,5 0,10" />
								</svg>
								<span><span className="text-purple-500">Degree:</span> <span className="text-gray-400">MSc in Computer Science, Aalto University</span></span>
							</li>
							<li className="flex items-start gap-3">
								<svg className="mt-1 h-2.5 w-2.5 flex-shrink-0 text-purple-500" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
									<polygon points="0,0 10,5 0,10" />
                                    </svg>
                                    <span><span className="text-purple-500">Location:</span> <span className="text-gray-400">Espoo, Finland</span></span>
							</li>
						</ul>
						</Reveal>
						<Reveal delayMs={300}>
						<div className="mt-8 space-y-4 text-gray-400">
							<p>Hi, I’m Dijam 👋</p>
							<p>
								I’m a Master of Science in Computer Science with a passion for full-stack development. Over the years, I’ve worked on projects ranging from Java Spring backends to Node.js web apps, and I love building applications that are both functional and intuitive.
							</p>
							<p>
								Lately, I’ve been especially excited about creating full-stack solutions with modern JavaScript technologies like React and Node.js, but I also enjoy working with Java/Kotlin and Spring for robust backend systems. For me, the thrill is in crafting seamless user experiences backed by solid, scalable code.
							</p>
						</div>
						</Reveal>
						</div>
					</Reveal>

					<Reveal delayMs={450} className="md:col-span-1">
						<div className="flex justify-center md:justify-end">
							<div className="relative">
								<img
									src="/assets/CV_pic.JPG"
									alt="Portrait"
									className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-lg ring-2 ring-purple-500/40 shadow-lg"
								/>
								<div className="pointer-events-none absolute inset-0 rounded-lg bg-purple-500/40" />
								<div className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-purple-500/40" />
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

export default AboutPage


