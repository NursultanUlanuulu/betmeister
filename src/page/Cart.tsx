import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import betmeister from '../assets/betmeister-scaled.jpg'

interface CartItem {
	id: number
	name: string
	price: number
	originalPrice?: number
	description: string
	quantity: number
	type: string
}

interface CartState {
	items: CartItem[]
}

interface RootState {
	cart: CartState
}

const CartContent = () => {
	const cart = useSelector((state: RootState) => state.cart)
	// const dispatch = useDispatch()

	const calculateTotal = () => {
		return cart.items.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	const calculateItemSavings = (item: CartItem) => {
		if (item.originalPrice) {
			return (item.originalPrice - item.price) * item.quantity
		}
		return (16999 - 14999) * item.quantity
	}

	if (cart.items.length === 0) {
		return (
			<div className='font-sans min-h-screen'>
				<div className='bg-white pt-24 pb-20 px-4 md:px-8'>
					<div className='max-w-[1200px] mx-auto'>
						<div className='mb-6 flex items-center text-base'>
							<Link
								to='/'
								className='text-gray py-1 px-3 rounded hover:bg-blue-500 transition-colors mr-2'
							>
								Home
							</Link>
							<span className='mx-1 text-gray-500 font-medium'>&gt;</span>
							<span className='text-black py-1 px-3 rounded font-medium ml-2'>
								Košík
							</span>
						</div>
						<h1 className='text-7xl font-extrabold text-gray-900 leading-tight mt-8'>
							Košík
						</h1>
					</div>
				</div>

				<div className='bg-gray-50 py-24 px-4 md:px-8 relative flex justify-center items-center h-[50vh]'>
					<div className='max-w-[600px] text-center bg-white p-12 rounded-lg shadow-xl border border-gray-100'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-16 w-16 text-gray-400 mx-auto mb-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
							/>
						</svg>
						<h2 className='text-3xl font-bold text-gray-900 mb-3'>
							Váš košík je prázdný.
						</h2>
						<p className='text-gray-600 mb-8'>
							Vypadá to, že jste ještě nic nepřidali.
						</p>
						<Link to='/'>
							<button className='bg-[#2e1a5e] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#1f0d3c] transition-colors text-lg'>
								Pokračovat v nákupu
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='font-sans min-h-screen'>
			<div className='bg-white pt-24 pb-20 px-4 md:px-8'>
				<div className='max-w-[1200px] mx-auto'>
					<div className='mb-6 flex items-center text-base'>
						<Link
							to='/'
							className='text-gray py-1 px-3 rounded hover:bg-blue-500 transition-colors mr-2'
						>
							Home
						</Link>
						<span className='mx-1 text-gray-500 font-medium'>&gt;</span>
						<span className='text-black py-1 px-3 rounded font-medium ml-2'>
							Košík
						</span>
					</div>
					<h1 className='text-7xl font-extrabold text-gray-900 leading-tight mt-8'>
						Košík
					</h1>
				</div>
			</div>

			<div className='bg-gray-50 pt-12 px-4 md:px-8 relative z-10 mb-[360px]'>
				<div className='max-w-[1300px] mx-auto bg-white relative shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl'>
					<div className='flex flex-col lg:flex-row'>
						<div className='lg:w-2/3 border-r border-gray-200 px-6 md:px-8 py-6'>
							<div className='text-sm font-medium text-gray-700 uppercase pb-4'>
								PRODUKT
							</div>

							{cart.items.map(item => (
								<div
									key={item.id}
									className='pt-4 md:pt-0 pb-8 border-t border-gray-200'
								>
									<div className='flex flex-col md:flex-row justify-between items-start'>
										<div className='flex items-start w-full md:w-2/3 mb-4 md:mb-0'>
											<div className='w-24 h-24 mr-4 md:mr-6 flex-shrink-0'>
												<div className='bg-gray-100 w-full h-full relative overflow-hidden rounded-md'>
													<img
														src={betmeister}
														alt={item.name}
														className='w-full h-full object-cover'
													/>
												</div>
											</div>
											<div className='flex-grow'>
												<h2 className='text-lg font-bold mb-1 text-gray-900'>
													{item.name}
												</h2>
												<div className='flex items-center gap-3 mb-1'>
													<span className='text-gray-500 line-through text-sm'>
														{(item.originalPrice || 16999).toLocaleString(
															'cs-CZ'
														)}{' '}
														Kč
													</span>
													<span className='text-xl font-bold text-gray-900'>
														{item.price.toLocaleString('cs-CZ')} Kč
													</span>
												</div>
												<div className='bg-green-100 text-green-800 font-medium px-2 py-0.5 text-xs inline-block rounded-sm mb-3'>
													UŠETŘI{' '}
													{calculateItemSavings(item).toLocaleString('cs-CZ')}{' '}
													KČ
												</div>
												<p className='text-sm text-gray-600'>
													{item.description}
												</p>
											</div>
										</div>

										<div className='flex flex-col md:items-end w-full md:w-1/3 mt-4 md:mt-0'>
											<div className='w-full max-w-[200px] flex md:flex-col items-center md:items-end justify-between'>
												<div className='flex items-center border border-gray-300 rounded'>
													<button
														className='px-3 py-1 text-base font-light hover:bg-gray-100'
														// onClick={() => dispatch(decrementQuantity(item.id))}
														disabled={item.quantity <= 1}
													>
														-
													</button>
													<span className='px-3 py-1 border-x border-gray-300 font-medium min-w-[30px] text-center'>
														{item.quantity}
													</span>
													<button
														className='px-3 py-1 text-base font-light hover:bg-gray-100'
														// onClick={() => dispatch(incrementQuantity(item.id))}
													>
														+
													</button>
												</div>
												<button
													className='text-sm text-gray-500 hover:text-red-500 underline mt-2 md:mt-4'
													// onClick={() => dispatch(removeItem(item.id))}
												>
													Odstranit položku
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className='lg:w-1/3 px-6 md:px-8 py-6'>
							<div className='sticky top-[96px]'>
								<div className='mb-6 border-b border-gray-200 pb-4'>
									<div className='text-sm font-medium text-gray-700 uppercase mb-4'>
										CELKEM K PLATBĚ
									</div>
									<div className='mb-4'>
										<div className='relative'>
											<select
												id='coupon'
												className='w-full border border-gray-300 bg-white rounded px-3 py-2 text-sm appearance-none pr-8 focus:outline-none focus:border-black'
											>
												<option>Přidat kupón</option>
											</select>
											<svg
												className='w-4 h-4 text-gray-700 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path
													fillRule='evenodd'
													d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z'
													clipRule='evenodd'
												/>
											</svg>
										</div>
									</div>
								</div>

								<div className='mb-8 pb-6 border-b border-gray-300 flex justify-between items-center'>
									<span className='font-medium text-gray-700'>
										Částka celkem
									</span>
									<span className='text-2xl font-bold text-gray-900'>
										{calculateTotal().toLocaleString('cs-CZ')} Kč
									</span>
								</div>

								<div className='space-y-3'>
									<button className='w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 font-medium text-lg'>
										<span className='font-bold text-lg'>G</span>
										<span className='font-normal'>Pay</span>
									</button>
									<button className='w-full bg-[#00e300] text-black py-3 rounded-lg flex items-center justify-center gap-1 hover:bg-[#00d000] font-bold text-lg'>
										<span>Platte s</span>
										<span className='text-xl font-black'>❯</span>
										<span>link</span>
									</button>
									<div className='text-center text-gray-500 text-sm py-2'>
										NEBO
									</div>
									<button className='w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 text-lg'>
										Pokračujte k pokladně
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartContent
