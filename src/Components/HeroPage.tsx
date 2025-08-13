import Reveal from './Reveal'

const HeroPage = () => {
	return (
		<section id="hero" className="min-h-screen bg-[#0A192F] text-white flex items-center">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
			<Reveal delayMs={150}>
					<h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-100">
					  Dijam Goran
					</h1>
				</Reveal>

				<Reveal delayMs={300}>
					<h2 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight text-gray-400">
					  Software Engineer | MSc in Computer Science
					</h2>
				</Reveal>

				<Reveal delayMs={450}>
					<p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400">
          I’m a software engineer who loves building efficient, scalable full-stack applications from the ground up.
					</p>
				</Reveal>

				<Reveal delayMs={600}>
					<div className="mt-10">
					  <button
							onClick={() => {
								const el = document.getElementById('about')
								if (el) {
									el.scrollIntoView({ behavior: 'smooth', block: 'start' })
								}
							}}
							className="inline-block rounded border border-purple-500 px-6 py-3 text-purple-500 hover:bg-purple-500/10 transition-colors duration-300 cursor-pointer"
					  >
						  Read more about me!
					  </button>
					</div>
				</Reveal>
      </div>
    </section>
  )
}

export default HeroPage


