import img2 from '../assets/block1.png'
import img from '../assets/kurzy-1365x2048.jpg.png'
export function Block1() {
	return (
		<section>
			<div className='w-[1200px] m-auto justify-between  flex py-7'>
				<div className='gap-4 w-[600px]'>
					<h1 className='font-bold text-700 text-[64px]'>Data místo náhody.</h1>
					<h1 className='bg-[#C8A2D6] font-bold text-700 text-[64px]'>
						Výhry místo tipů.
					</h1>
					<p className='text-400 text-[18px] mt-6'>
						Přidej se k uzavřené skupině expertů, kteří ti doručí sázky s
						vysokou důvěrou – na základě dat, analýz a aktuálních informací. Ať
						jsi začátečník nebo zkušený sázkař, jsme tu pro tebe.
					</p>
					<button className='bg-black text-white p-4 px-10 rounded-[100px] mt-10 text-[15px] flex items-center gap-4 font-semibold'>
						Přidej se k vítězům
						<svg viewBox='0 0 448 512' width='14' fill='white'>
							<path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z' />
						</svg>
					</button>
				</div>
				<div className='relative'>
					<img src={img} alt='photo' />
					<img
						src={img2}
						alt='photo'
						className=' absolute top-[350px] right-[300px]'
					/>
				</div>
			</div>
		</section>
	)
}
