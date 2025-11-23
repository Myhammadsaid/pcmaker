import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Favorite from './pages/Favorite'
import Home from './pages/Home'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path='/favorite' element={<Favorite />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/account' element={<Account />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
