import React from 'react'
import Logo from '../../assets/icon.png'
import { NavLink, Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="bg-[#1C2B35] text-white">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2">
							<h2 className="text-2xl font-bold text-orange-500">
								Bangla-john
								{/* <img src={Logo} alt="Logo" className="w-10 h-10" /> */}
							</h2>
						</div>

						<p className="mt-4 text-gray-300 text-sm leading-6">
							Your trusted online shopping destination. Discover quality
							products at affordable prices with fast and reliable delivery.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-gray-300">
							<li>
								<NavLink to="/" className="hover:text-orange-400">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/shop" className="hover:text-orange-400">
									Shop
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="hover:text-orange-400">
									Order Review
								</NavLink>
							</li>
							<li>
								<NavLink to="#" className="hover:text-orange-400">
									Manage Inventory
								</NavLink>
							</li>
						</ul>
					</div>

					{/* Customer Support */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Customer Support</h3>
						<ul className="space-y-2 text-gray-300">
							<li>Email: support@banglahn.com</li>
							<li>Phone: +880 1234-567890</li>
							<li>Available: 9:00 AM - 8:00 PM</li>
						</ul>
					</div>

					{/* Social */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Follow Us</h3>

						<div className="flex gap-4">
							<Link
								to="#"
								className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
							>
								F
							</Link>

							<Link
								to="#"
								className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
							>
								I
							</Link>

							<Link
								to="#"
								className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
							>
								X
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
					© {new Date().getFullYear()} Bangla-john. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
