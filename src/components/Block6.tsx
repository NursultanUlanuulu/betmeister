import video from '../assets/3192082-uhd_3840_2160_25fps.mp4'

const Block6 = () => {
	return (
		<section className='relative h-[70vh] overflow-hidden'>
			{/* Видео фон */}
			<div className='absolute inset-0 z-0'>
				<video
					autoPlay
					muted
					loop
					playsInline
					className='w-full h-full object-cover'
				>
					<source src={video} type='video/mp4' />
				</video>

				{/* Затемнение поверх видео */}
				<div className='absolute inset-0 bg-black/60' />
			</div>

			{/* Контент поверх видео */}
			<div className='relative z-10 flex h-full items-center justify-center px-4'>
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
