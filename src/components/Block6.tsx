// import video from '../assets/3192082-uhd_3840_2160_25fps.mp4'

const Block6 = () => {
	return (
		<section className=' min-h-screen overflow-hidden bg-blue-500 z-10'>
			{/* Видео фон */}
			{/* <div className='absolute inset-0 z-0'>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload='auto'
					className='absolute w-full h-full object-cover'
				>
					<source src={video} type='video/mp4' />
				</video>
				<div className='absolute inset-0 bg-black/60' />
			</div> */}

			{/* Контент */}
			<div className='relative z-10 flex items-center justify-center min-h-screen px-4'>
				<div className='max-w-[600px] w-full text-center'>
					<h2 className='text-white text-5xl md:text-6xl font-bold leading-tight'>
						Přistupuj ke sportu jako k trhu.
					</h2>
					<p className='text-gray-200 mt-6 text-lg md:text-xl'>
						Predikuj, analyzuj, vydělávej.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Block6
