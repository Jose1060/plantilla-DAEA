import React from "react";
import { movie1, movie2, movie3 } from "../assets";

type Props = {};

const Hero = (props: Props) => {
	return (
		<section className=" max-w-[1200px] flex items-center justify-center flex-col min-h-screen">
			<h1 className="text-[30px] font-extrabold text-red-500 my-14">
				In Theaters
			</h1>
			<div className="grid grid-cols-3 gap-6">
				<div className="rounded-xl flex flex-col bg-neutral-900 hover:scale-105 duration-200">
					<img
						src={movie1}
						alt="peli 1"
						className=" overflow-hidden rounded-t-xl h-[220px] object-cover"
					/>
					<div className="px-4 pt-4 pb-5 flex items-start flex-col space-y-1">
						<p className=" text-red-500 font-bold text-[13px]">Comedia</p>
						<h2 className="text-[20px] font-semibold">Super Cool</h2>
						<p className=" text-gray-500 font-semibold text-[13px]">
							Tue Aug 09 2017
						</p>
					</div>
				</div>
				<div className="rounded-xl flex flex-col bg-neutral-900 hover:scale-105 duration-200">
					<img
						src={movie2}
						alt="peli 2"
						className=" overflow-hidden rounded-t-xl h-[220px] object-cover"
					/>
					<div className="px-4 pt-4 pb-5 flex items-start flex-col space-y-1">
						<p className=" text-red-500 font-bold text-[13px]">Terror</p>
						<h2 className="text-[20px] font-semibold">It (Eso)</h2>
						<p className=" text-gray-500 font-semibold text-[13px]">
							Tue Aug 10 2015
						</p>
					</div>
				</div>
				<div className="rounded-xl flex flex-col bg-neutral-900 hover:scale-105 duration-200">
					<img
						src={movie3}
						alt="peli 3"
						className=" overflow-hidden rounded-t-xl h-[220px] object-cover"
					/>
					<div className="px-4 pt-4 pb-5 flex items-start flex-col space-y-1">
						<p className=" text-red-500 font-bold text-[13px]">Anime</p>
						<h2 className="text-[20px] font-semibold">Guren Lagan</h2>
						<p className=" text-gray-500 font-semibold text-[13px]">
							Tue Aug 08 2015
						</p>
					</div>
				</div>
			</div>

			<div className="my-24 space-y-6">
				<h1 className="text-[30px] font-extrabold text-red-500">
					Upcoming Releases
				</h1>
				<h2 className="text-[20px] text-gray-400">
					There are no elements to display
				</h2>
			</div>
		</section>
	);
};

export default Hero;
