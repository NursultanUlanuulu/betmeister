import block2img2 from '../assets/2.jpeg'
import block2img from '../assets/tips-scaled.jpg'

export function Block2() {
	return (
		<section
			id='block2'
			className='bg-black mt-[200px] text-white h-190 w-100% mx-auto  font-dm-sans z-10'
		>
			<section className='bg-black mt-[200px] text-white h-190 w-100% mx-auto pt-15 font-dm-sans z-10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 z-10'>
					<div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 lg:py-20'>
						<div className='relative flex justify-center lg:justify-start'>
							<div className='relative w-full flex justify-center -mt-8 lg:-mt-12'>
								<img
									src={block2img}
									alt='Предыдущее изображение'
									className='max-w-[calc(100%-140px)] lg:max-w-[calc(100%-160px)] rounded-lg shadow-lg mx-auto lg:mx-0'
								/>

								<img
									src={block2img2}
									alt='Скриншот ставки'
									className='absolute w-[70%] max-w-[290px] top-[50%] left-1/2 transform -translate-x-1/2 lg:left-[60%] lg:top-[80%] shadow-2xl rounded-lg border-2 border-gray-700 lg:-translate-x-16'
								/>
							</div>
						</div>

						{/* Правая часть: Текст */}
						<div className='mt-16 lg:mt-0 lg:pl-8 xl:pl-12'>
							<h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight'>
								První ratingový systém v Česku
							</h1>

							<div className='space-y-4 lg:space-y-6'>
								<p className='text-lg lg:text-xl text-gray-300'>
									Sázení se dá měřit. My to děláme pomocí čísel.
								</p>

								<p className='text-lg lg:text-xl text-gray-300'>
									Naše vlastní metodika přiděluje sportovním událostem ratingy
									(AAA–D) podle datové analýzy, pravděpodobnosti a hodnoty
									kurzu. Žádné tipy podle pocitu – jen ověřená čísla a modely,
									které mají výsledky.
								</p>

								<p className='text-lg lg:text-xl font-extrabold text-white mt-6 lg:mt-8'>
									Rating ≠ náhoda. Rating = matematika.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}
