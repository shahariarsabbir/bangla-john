import React from 'react'

const Product = ({ product }) => {
	const { name, price, seller, ratings, img } = product
	return (
		<div className="card bg-base-100  w-75     border-1 border-gray-500  shadow-sm">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
					className="rounded-xl p-2 h-71"
					onError={(e) => {
						e.target.onerror = null
						e.target.src =
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUFAptqzuPWazzRRDTxwu0OKes_amPk22FjbpMYvvCAuywIXNYlKDcREW&s=10'
					}}
				/>
			</figure>
			<div className="card-body p-2">
				<h2 className="card-title">{name}</h2>
				<p className="font-semibold">Price: ${price} </p>
				<p className="font-semibold">rattings: ${price} </p>
				<p className="font-semibold">seller: ${price} </p>
			</div>

			<button className=" py-3 bg-orange-200 text-black rounded-b-lg hover:bg-orange-300 cursor-pointer font-semibold">
				Add To Cart
			</button>
		</div>
	)
}

export default Product
