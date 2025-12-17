import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CartContent from '../page/Cart'
import Home from '../page/Home'
import Layout from './Layout'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='cart' element={<CartContent />} />
				</Route>
			</Routes>
		</Router>
	)
}
