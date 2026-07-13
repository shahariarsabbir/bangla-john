const addTo = (id) => {
	let shoppingCart = {}

	const storedCart = localStorage.getItem('shopping-cart')

	if (storedCart) {
		shoppingCart = JSON.parse(storedCart)
	}

	id = String(id)

	if (shoppingCart[id]) {
		shoppingCart[id] = shoppingCart[id] + 1
	} else {
		shoppingCart[id] = 1
	}

	localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
	const storedCart = localStorage.getItem('shopping-cart')

	if (storedCart) {
		return JSON.parse(storedCart)
	}

	return {}
}

const removeFromDb = (id) => {
	const storedCart = localStorage.getItem('shopping-cart')

	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart)

		id = String(id)

		delete shoppingCart[id]

		localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
	}
}

export { addTo, getStoredCart, removeFromDb }
