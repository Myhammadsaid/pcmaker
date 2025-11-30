import { useEffect, useState } from 'react'
import { products } from '../data/products.data'
import ProductsCard from './ProductsCard'

const Products = () => {
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem('favorite')) || []
	)

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(favorites))
	}, [favorites])

	const handleFavoriteProduct = product => {
		let item = favorites.filter(item => item.id === product.id)
		if (!item.length) {
			return setFavorites(prev => [...prev, product])
		} else {
			let filtered = favorites.filter(item => item.id !== product.id)
			return setFavorites(filtered)
		}
	}

	return (
		<section className='mb-10'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold mb-5 lowercase'>Продукты</h1>
				<div className='flex items-center justify-center gap-5 flex-wrap'>
					{products?.map(item => (
						<ProductsCard
							key={item}
							product={item}
							addFavorite={handleFavoriteProduct}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Products
