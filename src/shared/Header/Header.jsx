import React from 'react'
import Logo from '../../assets/icon.png'

const Header = () => {
	const menuItems = (
		<>
			<li>
				<a>HOME</a>
			</li>
			<li>
				<a href="/shop">SHOP</a>
			</li>
			<li>
				<a>MANAGE INVENTORY</a>
			</li>
			<li>
				<a>ORDER REVIEW</a>
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

					<a className="btn btn-ghost text-xl text-orange-500 font-bold normal-case">
						bangla-
						<img src={Logo} alt="Logo" className="w-10 h-10 ml-2" />
						hn
					</a>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{menuItems}</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
