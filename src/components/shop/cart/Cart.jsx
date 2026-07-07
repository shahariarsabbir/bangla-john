import React from 'react'

const Cart = () => {
	return (
		<div className="h-full flex items-center justify-center p-10">
			<div className="w-full">
				<h1 className="text-center font-semibold text-2xl mb-6">
					Order Summary
				</h1>

				<p className="text-sm text-[#2A414F] my-3">Selected Items:</p>
				<p className="text-sm text-[#2A414F] my-3">Total Price:</p>
				<p className="text-sm text-[#2A414F] my-3">Total Shipping Charge:</p>
				<p className="text-sm text-[#2A414F] my-3">Tax:</p>

				<h3 className="text-xl font-semibold my-3">Grand Total:</h3>

				<button className="w-full mt-10 rounded-lg bg-red-500 p-4 text-white">
					Clear Cart
				</button>

				<button className="w-full mt-4 rounded-lg bg-orange-500 p-4 text-white">
					Review Order
				</button>
			</div>
		</div>
	)
}

export default Cart
