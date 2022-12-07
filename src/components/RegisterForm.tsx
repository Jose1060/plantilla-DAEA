import React from "react";
import { logo } from "../assets";

type Props = {};

const RegisterForm = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center w-[500px] px-8 py-10  ">
			<div className="flex flex-col items-center space-y-10">
				<img src={logo} alt="logo" width={120} />
				<h1 className="text-[40px] font-extrabold">Registra una cuenta</h1>
			</div>
			<div className="mt-[60px] w-full">
				<div className="flex flex-col items-stretch space-y-5">
					<div className="flex flex-col space-y-1">
						<label htmlFor="" className="text-start text-gray-500">
							Correo electronico
						</label>
						<input
							type="text"
							className="rounded-lg text-[17px] text-neutral-600 px-4 py-2"
						/>
					</div>

					<div className="flex flex-col space-y-1">
						<label htmlFor="" className="text-start text-gray-500">
							Contraseña
						</label>
						<input
							type="password"
							className="rounded-lg text-[17px] text-neutral-600 px-4 py-2"
						/>
					</div>
				</div>

				<button className="bg-red-500 px-4 py-2 rounded-lg flex items-stretch w-full mt-10 justify-center">
					<p className="text-[15px] font-bold text-center">Registrar</p>
				</button>
			</div>
		</div>
	);
};

export default RegisterForm;
