import React from 'react'
import { Link } from 'react-router-dom'

const CartContent = ({ cart }) => {
	const totalPrice = cart.reduce((sum, product) => sum + product.price, 0)

	return (
		<div className="w-full p-4 py-16">
			<h1 className="text-center font-semibold text-2xl mb-6">Order Summary</h1>

			<p className="text-sm text-[#2A414F] my-3">
				Selected Items: {cart.length}
			</p>

			<p className="text-sm text-[#2A414F] my-3">
				Total Price: ${totalPrice.toFixed(2)}
			</p>

			<p className="text-sm text-[#2A414F] my-3">Total Shipping Charge:</p>

			<p className="text-sm text-[#2A414F] my-3">Tax:</p>

			<h3 className="text-xl font-semibold my-3">
				Grand Total: ${totalPrice.toFixed(2)}
			</h3>

			<Link
				to=""
				className=" btn w-full mt-10 rounded-lg bg-red-500 p-4 text-white"
			>
				Clear Cart
			</Link>

			<Link
				to="/order-review"
				className="btn w-full mt-4 rounded-lg bg-orange-500 p-4 text-white"
			>
				Review Order
			</Link>
		</div>
	)
}

export default CartContent
