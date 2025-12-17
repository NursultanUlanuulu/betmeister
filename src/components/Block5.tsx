import icon from '../assets/arrow.svg'
import betmeister from '../assets/betmeister-scaled.jpg'
import form3 from '../assets/form3.jpeg'

const Block5 = () => {
	// const dispatch = useDispatch()

	// const handleAddMonthlyMembership = () => {
	// 	const membershipItem = {
	// 		id: 1,
	// 		name: 'VIP členství – 1 měsíc',
	// 		price: 14999,
	// 		originalPrice: 18999,
	// 		description: 'Přístup do VIP kanálu Telegram na 30 dní',
	// 		quantity: 1,
	// 		type: 'monthly',
	// 	}
	// 	dispatch(addToCart(membershipItem))
	// 	alert('Položka byla přidána do košíku!')
	// }

	// const handleAddSinglePrediction = () => {
	// 	const predictionItem = {
	// 		id: 2,
	// 		name: 'Jednorázová prognóza',
	// 		price: 999,
	// 		originalPrice: 1499,
	// 		description: 'Jednorázová prognóza s detailním rozborem a hodnocením',
	// 		quantity: 1,
	// 		type: 'single',
	// 	}
	// 	dispatch(addToCart(predictionItem))
	// 	alert('Položka byla přidána do košíku!')
	// }

	return (
		<div id='block5' className='bg-black text-white pt-48 pb-32 z-10lo'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex flex-col lg:flex-row gap-16'>
					<div className='lg:w-1/2 lg:pr-8'>
						<h1 className='text-5xl md:text-6xl font-extrabold mb-12'>
							VIP členství
						</h1>
						<div className='mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								1. Varianta – Měsíční členství
							</h2>
							<h3 className='text-2xl font-semibold mb-4'>Co získáš:</h3>
							<ul className='list-disc list-inside space-y-3 ml-4 text-gray-300 text-lg'>
								<li className='font-bold text-white'>
									**Přístup do VIP kanálu Telegram na 30 dní**
								</li>
								<li>Denní prognózy zápasů s podrobnými rozbory</li>
								<li>Používání ratingového systému (škála AAA-D)</li>
								<li>Srozumitelné, včasné a dostupné informace</li>
							</ul>
						</div>
						<hr className='border-gray-700 my-10' />
						<div className='mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								2. Varianta – Jednorázová prognóza
							</h2>
							<h3 className='text-2xl font-semibold mb-4'>Co získáš:</h3>
							<ul className='list-disc list-inside space-y-3 ml-4 text-gray-300 text-lg'>
								<li className='font-bold text-white'>
									**Jednorázová prognóza** – prémiová prognóza s detailním
									rozborem a hodnocením
								</li>
							</ul>
						</div>
						<hr className='border-gray-700 my-10' />
						<div className='mb-12'>
							<h2 className='text-2xl font-bold mb-4'>Proč Telegram?</h2>
							<p className='text-gray-300 text-lg'>
								Nemusíš se nikde registrovat. Všechny prognózy přijdou rovnou do
								telefonu přes Telegram – včas, srozumitelně a bez zpoždění.
							</p>
						</div>
						<div className='mb-16'>
							<h2 className='text-2xl font-bold mb-4'>Co dostanu po nákupu?</h2>
							<p className='text-gray-300 text-lg'>
								Odkaz a QR kód se automaticky zobrazí ihned po zaplacení.
							</p>
						</div>
						<div className='space-y-6'>
							<button
								// onClick={handleAddMonthlyMembership}
								className='flex justify-between items-center w-full max-w-md px-8 py-5 bg-white text-black font-bold text-xl rounded-xl shadow-xl hover:bg-[#C8A2D6] transition duration-300 transform hover:scale-[1.02]'
							>
								Koupit měsíční členství za 14.999 Kč
								<img src={icon} alt='Šipka' className='w-6 h-6 ml-4' />
							</button>
							<button
								// onClick={handleAddSinglePrediction}
								className='flex justify-between items-center w-full max-w-md px-8 py-5 bg-white text-black font-bold text-xl rounded-xl shadow-xl hover:bg-[#C8A2D6] transition duration-300 transform hover:scale-[1.02]'
							>
								Koupit jednorázovou prognózu za 999 Kč
								<img src={icon} alt='Šipka' className='w-6 h-6 ml-4' />
							</button>
						</div>
					</div>
					<div className='lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0'>
						<div className='relative'>
							<img
								src={betmeister}
								alt='Karta Betmeister'
								className='rounded-2xl shadow-2xl w-full max-w-xl object-cover'
							/>
							<div>
								<img
									src={form3}
									alt='Příklad prognózy'
									className='absolute w-full max-w-md lg:max-w-sm xl:max-w-md 
left-48 top-1/2.1 transform -translate-y-1/4 rounded-xl border-4 border-white shadow-2xl'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Block5
