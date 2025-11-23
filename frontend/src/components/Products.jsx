import { CiShoppingCart } from 'react-icons/ci'
import { IoStarSharp } from 'react-icons/io5'

const Products = () => {
	return (
		<section className='mb-10'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold mb-5 lowercase'>Продукты</h1>
				<div className='flex items-center justify-center gap-5 flex-wrap'>
					<div className='w-full max-w-[300px] border border-[#f1f1f1] p-3'>
						<img
							className='w-full mb-2'
							src='https://files.ox-sys.com/cache/500x_/image/0f/eb/92/0feb92c61d2d3d6f06a65330437ccf137e7b4f7e776bde9b0f82f5abb2dc6cea.png'
							alt=''
						/>
						<h4 className='text-[#555555] text-[14px] mb-2'>
							Brateck LDT69-C022 Black
						</h4>
						<div className='flex items-center justify-between mb-2'>
							<span className='flex items-center gap-1'>
								<IoStarSharp />
							</span>
							<span className='text-[12px] font-bold px-2 py-1 bg-[#ffd1ec] text-[#df1d8f]'>
								Brateck
							</span>
						</div>
						<p className='text-[#636363] text-[13px]'>Цена:</p>
						<h1 className='text-[#ff0096] font-bold mb-2'>1 110 000 UZS</h1>
						<button className='w-full h-5 py-5 flex items-center justify-center bg-[#ff0096] rounded-md text-white gap-2'>
							<CiShoppingCart size={20} /> В корзину
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products
