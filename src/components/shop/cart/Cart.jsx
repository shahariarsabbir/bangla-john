import React from 'react'
import CartContent from './CartContent'

const Cart = ({ cart }) => {
	return (
		<div className="drawer drawer-end lg:hidden">
			<input id="cart-drawer" type="checkbox" className="drawer-toggle" />

			{/* Mobile Cart Button */}
			<div className="drawer-content">
				<div className="fixed bottom-5 right-5 z-40">
					<label
						htmlFor="cart-drawer"
						className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-lg cursor-pointer"
					>
						🛒 Cart
					</label>
				</div>
			</div>

			{/* Drawer */}
			<div className="drawer-side z-50">
				<label htmlFor="cart-drawer" className="drawer-overlay"></label>

				<div className="bg-white w-[85%] sm:w-96 min-h-screen p-5 relative shadow-xl">
					{/* Close Button */}
					<label
						htmlFor="cart-drawer"
						className="btn btn-sm btn-circle absolute right-4 top-4"
					>
						✕
					</label>

					<CartContent cart={cart} />
				</div>
			</div>
		</div>
	)
}

export default Cart
