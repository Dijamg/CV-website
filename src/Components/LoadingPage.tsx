const LoadingPage = () => {
	return (
		<div className="min-h-screen bg-[#0A192F] text-white flex items-center justify-center">
			<div className="text-center relative">
				{/* Spinning circle */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-fast">
					<div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-transparent border-t-purple-400 border-r-purple-400"></div>
				</div>
				
				{/* Letters */}
				<div className="text-6xl md:text-8xl font-bold text-purple-500 font-oswald relative z-10">
					<span className="inline-block animate-fade-in-d">D</span>
					<span className="inline-block animate-fade-in-g">G</span>
				</div>
			</div>
		</div>
	)
}

export default LoadingPage