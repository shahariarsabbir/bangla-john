import React from 'react'

const Order = ({ product, removeProduct }) => {
	const { image, price, name, id, quantity } = product

	return (
		<div className="max-w-3xl mx-auto mb-5">
			<div className="bg-white shadow-lg rounded-xl p-5">
				<div className="flex items-center gap-6">
					<img
						src={image}
						alt={name}
						className="w-32 h-32 object-cover rounded-lg"
					/>

					<div className="flex-1">
						<h2 className="text-xl font-bold">{name}</h2>

						<p>Price: ${price}</p>

						<p>Quantity: {quantity}</p>
					</div>

					<button
						onClick={() => removeProduct(id)}
						className="btn btn-error text-white"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default Order
