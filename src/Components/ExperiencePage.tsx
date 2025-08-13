import Reveal from './Reveal'

const workExperience = [
	{
		period: "2025/4 - 2025/7",
		company: "Aalto University",
		title: "Research Assistant"
	},
	{
		period: "2024/6 - 2025/4",
		company: "Samlink Oy",
		title: "Application Developer (Java Spring, Node.js)"
	},
	{
		period: "2023/5 - 2023/9",
		company: "Samlink Oy",
		title: "Application Developer (Java Spring)"
	},
	{
		period: "2022/6 - 2022/9",
		company: "Samlink Oy",
		title: "Application Developer (Java Spring)"
	},
	{
		period: "2021/6 - 2021/9",
		company: "ManpowerGroup",
		title: "Service Desk Agent"
	},
	{
		period: "2019/10 - 2020/9",
		company: "Fujitsu Finland",
		title: "Service Desk Agent"
	}
]

const education = [
	{
		year: "2025",
		degree: "Master of Science - MS, Computer Science",
		university: "Aalto University",
		major: "Web Technologies, Applications and Science",
		minor: "Automation and Robotics"
	},
	{
		year: "2022",
		degree: "Bachelor of Science - BS, Computer Science",
		university: "Aalto University",
		major: "Computer Science",
		minor: "Mathematics"
	}
]

const ExperiencePage = () => {
	return (
		<section id="experience" className="bg-[#0A192F] text-white">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24">
				<div className="max-w-4xl mx-auto">
					<Reveal>
						<div className="flex items-center gap-4 mb-12">
							<span className="text-purple-500 font-semibold text-xl sm:text-2xl leading-none">04.</span>
							<h2 className="text-gray-200 font-bold text-2xl sm:text-3xl">Experience</h2>
							<div className="h-px bg-gray-700 flex-1" />
						</div>
					</Reveal>
				</div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300">
                        <div>
                            <Reveal delayMs={200}>
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="text-purple-500 font-semibold">Work Experience</h3>
                                    <div className="h-px bg-gray-700 flex-1" />
                                </div>
                                <div className="relative pl-6">
                                    <ul className="space-y-6">
                                        {workExperience.map((job, index) => (
                                            <li key={index} className="relative">
                                                <svg className="absolute left-[4px] top-1.5 h-3 w-3 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="22,12 2,2 2,22" />
                                                </svg>
                                                <div className="pl-6">
                                                    <p className="text-sm text-purple-400">{job.period}</p>
                                                    <p className="text-gray-300 font-medium">{job.company}</p>
                                                    <p className="text-gray-400">{job.title}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                        <div>
                            <Reveal delayMs={400}>
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="text-purple-500 font-semibold">Education</h3>
                                    <div className="h-px bg-gray-700 flex-1" />
                                </div>
                                <div className="relative pl-6">
                                    <ul className="space-y-6">
                                        {education.map((edu, index) => (
                                            <li key={index} className="relative">
                                                <svg className="absolute left-[4px] top-1.5 h-3 w-3 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="22,12 2,2 2,22" />
                                                </svg>
                                                <div className="pl-6">
                                                    <p className="text-sm text-purple-400">{edu.year}</p>
                                                    <p className="text-gray-300 font-medium">{edu.degree}</p>
                                                    <p className="text-gray-300">{edu.university}</p>
                                                    <p className="text-gray-400 text-sm">Major: {edu.major}</p>
                                                    <p className="text-gray-400 text-sm">Minor: {edu.minor}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
			</div> 
		</section>
	)
}

export default ExperiencePage