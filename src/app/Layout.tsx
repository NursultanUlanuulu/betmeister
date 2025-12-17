import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import ScrollToTopButton from '../components/ScrollToTopButton'

export default function Layout() {
	return (
		<div className='relative z-10'>
			<Header />
			<main>
				<Outlet />
			</main>

			<Footer />
			<ScrollToTopButton />
		</div>
	)
}
