import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { IoStarSharp } from 'react-icons/io5'

const ProductsCard = ({ product, addFavorite }) => {
	const stars = new Array(product.stars).fill('')

	return (
		<div className='w-full max-w-[300px] border border-[#f1f1f1] p-3 relative'>
			<img className='w-full mb-2' src={product.image} alt={product.title} />
			<h4 className='text-[#555555] text-[14px] mb-2'>{product.title}</h4>
			<div className='flex items-center justify-between mb-2'>
				<span className='flex items-center gap-1'>
					{stars.map(_ => (
						<IoStarSharp key={Math.random().toString()} />
					))}
				</span>
				<span className='text-[12px] font-bold px-2 py-1 bg-[#ffd1ec] text-[#df1d8f]'>
					{product.brand}
				</span>
			</div>
			<p className='text-[#636363] text-[13px]'>Цена:</p>
			<h1 className='text-[#ff0096] font-bold mb-2'>{product.price} UZS</h1>
			<button className='w-full h-5 py-5 flex items-center justify-center bg-[#ff0096] rounded-md text-white gap-2'>
				<CiShoppingCart size={20} /> В корзину
			</button>
			<button
				onClick={() => addFavorite(product)}
				className='absolute top-5 right-5'
			>
				<CiHeart size={26} />
			</button>
		</div>
	)
}

export default ProductsCard
