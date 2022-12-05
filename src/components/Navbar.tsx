import React from "react";
import { logo } from "../assets";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="flex justify-between">
			<div className="flex flex-row space-x-6 items-center">
				<img src={logo} alt="logo" width={30} />
				<p className="text-[20px] font-semibold">Filter Movie</p>
			</div>
			<div className=" space-x-4">
				<a href="#" className="px-4 py-2 bg-slate-500 rounded-[5px]">
					Register
				</a>
				<a href="#" className="px-4 py-2 bg-red-500 rounded-[5px]">
					Login
				</a>
			</div>
		</div>
	);
};

export default Navbar;
