import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setShow(true)
        return
      }

      const currentY = window.scrollY
      if (currentY < 50) {
        setShow(true)
      } else if (currentY > lastScrollY.current) {
        setShow(false)
        setIsMenuOpen(false)
      } else {
        setShow(true)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
		<nav className={`fixed top-0 w-full bg-[#0A192F]/80 shadow-md z-50 py-8 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full flex justify-between items-center px-4 md:px-8">
		<div className="flex items-center select-none">
			<button
				aria-label="Home"
				onClick={() => window.location.href = '/'}
				className="inline-flex items-center justify-center hover:cursor-pointer group"
			>
				<div className="h-12 w-12 md:h-12 md:w-12 text-purple-500 transition-colors duration-300 flex items-center justify-center relative">
					<span className="text-2xl md:text-3xl font-bold">DG</span>
					<div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 ease-out"></div>
				</div>
			</button>
		</div>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
            className="cursor-pointer text-gray-300 hover:text-purple-500 transition-colors"
            >
              <span className="text-purple-500 mr-2">{(i + 1).toString().padStart(2, '0')}.</span>
              {link.label}
            </button>
          ))}
          
          {/* CV Button */}
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border border-purple-500 px-6 py-2 text-purple-500 hover:bg-purple-500/10 transition-colors duration-300 cursor-pointer"
          >
            CV
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-purple-500 hover:text-purple-400 transition-colors h-12 w-12 inline-flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-4 py-2 pb-4 space-y-2 text-white">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
						className="block w-full text-left cursor-pointer text-purple-500 hover:text-purple-500 capitalize transition-colors duration-300 py-2"
            >
              <span className="text-purple-500 mr-2">{(i + 1).toString().padStart(2, '0')}.</span>
              {link.label}
            </button>
          ))}
          
          {/* CV Button in Mobile Menu */}
          <div className="pt-2 border-t border-gray-700">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left cursor-pointer text-purple-500 hover:text-purple-400 transition-colors duration-300 py-2"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

