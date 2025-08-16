
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import SkillsPage from './SkillsPage'
import ProjectsPage from './ProjectsPage'
import ExperiencePage from './ExperiencePage'
import ContactPage from './ContactPage'
import SideNav from './SideNav'

const MainPage = () => {
	return (
		<>
			<Navbar />
			<SideNav />
			<HeroPage />
			<AboutPage />
			<SkillsPage />
			<ProjectsPage />
			<ExperiencePage />
			<ContactPage />
		</>
	)
}

export default MainPage