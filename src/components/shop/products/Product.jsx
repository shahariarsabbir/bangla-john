import React from 'react'

const Product = ({ product, handleAddToCart }) => {
	const { name, price, seller, ratings, img } = product

	return (
		<div className="card bg-base-100 w-full sm:w-75 border border-gray-500 shadow-sm">
			<figure className="px-2 pt-2">
				<img
					src={
						img ||
						'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
					}
					alt={name}
					className="rounded-xl w-full h-56 sm:h-71 object-cover"
					onError={(e) => {
						e.target.onerror = null
						e.target.src =
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUFAptqzuPWazzRRDTxwu0OKes_amPk22FjbpMYvvCAuywIXNYlKDcREW&s=10'
					}}
				/>
			</figure>

			<div className="card-body p-3">
				<h2 className="card-title text-lg truncate">{name}</h2>

				<p className="font-semibold">Price: ${price}</p>

				<p className="font-semibold">Ratings: ⭐ {ratings}</p>

				<p className="font-semibold truncate">Seller: {seller}</p>
			</div>

			<button
				onClick={() => handleAddToCart(product)}
				className="py-3 bg-orange-200 text-black rounded-b-lg hover:bg-orange-300 cursor-pointer font-semibold w-full"
			>
				Add To Cart 🛒
			</button>
		</div>
	)
}

export default Product
