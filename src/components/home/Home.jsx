import React from 'react'
import HomeBanner from '../../assets/banner.jpg'

const Home = () => {
	return (
		<div className="hero bg-base-200 min-h-screen justify-evenly ">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={HomeBanner}
					className="max-w-sm rounded-lg shadow-2xl home-banner m-2 w-1/1 md:w-1/2 "
				/>
				<div clasName=" space-y-5 md:space-y-15  ">
					<p className="py-9 text-orange-500 text-2xl">sale up to 70%</p>
					<div>
						<h1 className="text-3xl md:text-5xl font-bold">
							NEW COLLECTION FOR FALL
						</h1>
						<p className="">
							Discover the latest trends in fashion and explore our new
							collection for the fall season. From cozy sweaters to stylish
							boots, we have everything you need to stay warm and fashionable.
							Shop now and elevate your wardrobe with our exclusive fall
							collection.
						</p>
					</div>

					<button className="btn btn-primary bg-orange-500 border-orange-500 mt-10">
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
