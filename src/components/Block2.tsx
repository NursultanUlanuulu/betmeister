import block2img2 from '../assets/2.jpeg'
import block2img from '../assets/tips-scaled.jpg'

export function Block2() {
	return (
		<section className='bg-black mt-[200px] text-white'>
			<div className='w-[1200px] m-auto'>
				<div>
					<img src={block2img} alt='' />
					<img src={block2img2} alt='' />
				</div>
				<h1>První ratingový systém v Česku</h1>
			</div>
		</section>
	)
}
