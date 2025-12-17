import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/bet.png'

export function Header() {
	// const dispatch = useDispatch()

	const [showHeader, setShowHeader] = useState<boolean>(true)
	const [lastScrollY, setLastScrollY] = useState<number>(0)

	// const handleAddToCart = () => {
	// 	const membershipItem = {
	// 		id: 1,
	// 		name: 'VIP членство – 1 месяц',
	// 		price: 14999,
	// 		originalPrice: 16999,
	// 		description: 'Получите ежемесячно доступ к VIP каналу Telegram',
	// 	}
	// 	dispatch(addToCart(membershipItem))
	// }

	const scrollToBlock = (blockId: string) => {
		const element = document.getElementById(blockId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY && currentScrollY > 120) {
				setShowHeader(false) // скролл вниз
			} else {
				setShowHeader(true) // скролл вверх
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	return (
		<header
			className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/95 backdrop-blur-sm
        shadow-sm
        transition-transform duration-300 ease-in-out
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
		>
			<div className='flex justify-between items-center max-w-[1200px] mx-auto h-[64px] px-6'>
				{/* LEFT: Logo + Navigation */}
				<div className='flex items-center gap-12 h-full'>
					<Link to='/' className='flex items-center h-full'>
						<img
							src={logo}
							width={220}
							alt='Betmeister Logo'
							className='h-full object-contain'
						/>
					</Link>

					<nav className='hidden lg:flex'>
						<ul className='flex gap-10 items-end m-0 p-0 list-none h-full'>
							<li>
								<button
									onClick={() => scrollToBlock('block1')}
									className='transition hover:text-[#C8A2D6]'
								>
									Domů
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToBlock('block2')}
									className='transition hover:text-[#C8A2D6]'
								>
									Jak to funguje
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToBlock('block5')}
									className='transition hover:text-[#C8A2D6]'
								>
									Členství
								</button>
							</li>
						</ul>
					</nav>
				</div>

				{/* RIGHT: Button */}
				<div className='flex items-center h-full'>
					<Link to='/cart'>
						<button
							// onClick={handleAddToCart}
							className='
                bg-[#16171C] text-white
                rounded-full
                px-8 py-3
                text-[16px]
                font-medium
                transition hover:bg-[#C8A2D6] hover:shadow-lg
                whitespace-nowrap
              '
						>
							Přidat členství do košíku
						</button>
					</Link>
				</div>
			</div>
		</header>
	)
}
