import logo from '/bet.png'
export function Header() {
	return (
		<header className='flex w-[1200px] py-8 m-auto justify-between items-center h-[50px]'>
			<div>
				<img src={logo} width={200} alt='' />
			</div>
			<nav>
				<ul className='flex gap-8 items-center text-500 text-[16px]'>
					<li>Domů</li>
					<li>Jak to funguje</li>
					<li>Členství</li>
				</ul>
			</nav>
			<div>
				<button className='bg-[#16171C] text-white rounded-[100px] px-5 py-2'>
					Přidat členství do košíku
				</button>
			</div>
		</header>
	)
}
