import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Order from './Order'
import { getStoredCart, removeFromDb } from '../../utility/fakedata'

const OrderReview = () => {
	const products = useLoaderData()
	const [cart, setCart] = useState([])

	useEffect(() => {
		const storedCart = getStoredCart()
		const savedCart = []

		for (const id in storedCart) {
			const addedProduct = products.find(
				(product) => String(product.id) === String(id),
			)
			if (addedProduct) {
				savedCart.push({
					...addedProduct,
					quantity: storedCart[id],
				})
			}
		}

		setCart(savedCart)
	}, [products])

	const removeProduct = (id) => {
		removeFromDb(id)

		const remaining = cart.filter((product) => product.id !== id)

		setCart(remaining)
	}

	return (
		<div>
			<h2 className="text-3xl font-bold mb-5">Order Review: {cart.length}</h2>

			{cart.map((product) => (
				<Order
					key={product.id}
					product={product}
					removeProduct={removeProduct}
				/>
			))}
		</div>
	)
}

export default OrderReview
