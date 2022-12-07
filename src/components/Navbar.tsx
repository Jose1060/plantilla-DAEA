import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="flex justify-between">
			<div className="flex flex-row space-x-6 items-center">
				<img src={logo} alt="logo" width={30} />
				<Link to={"/"}>
					<p className="text-[20px] font-semibold">Filter Movie</p>
				</Link>
			</div>
			<div className=" space-x-4">
				<Link to={"/register"} className="px-4 py-2 bg-slate-500 rounded-[5px]">
					Register
				</Link>
				<Link to={"/login"} className="px-4 py-2 bg-red-500 rounded-[5px]">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
