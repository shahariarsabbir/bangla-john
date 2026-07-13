import React from 'react'
import Logo from '../../assets/icon.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const menuItems = (
		<>
			<li>
				<NavLink to="/">HOME</NavLink>
			</li>
			<li>
				<NavLink to="/shop">SHOP</NavLink>
			</li>
			<li>
				<NavLink to="/manage-inventory">MANAGE INVENTORY</NavLink>
			</li>
			<li>
				<NavLink to="/order-review">ORDER REVIEW</NavLink>
			</li>
		</>
	)

	return (
		<header className="fixed top-0 left-0 w-full h-16 bg-[#1C2B35] shadow-sm z-50">
			<div className="navbar h-full justify-between lg:px-17 xl:px-34 text-amber-50">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>

						<ul
							tabIndex={-1}
							className="menu menu-sm dropdown-content bg-[#1C2B35] rounded-box z-50 mt-3 w-52 p-2 shadow"
						>
							{menuItems}
						</ul>
					</div>

					<NavLink
						to="/"
						className="text-2xl text-orange-500 font-bold normal-case cursor-pointer flex items-center"
					>
						bangla-
						<img src={Logo} alt="Logo" className="w-10 h-10 ml-2" />
						hn
					</NavLink>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{menuItems}</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
