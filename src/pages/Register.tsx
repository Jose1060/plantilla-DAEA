import React from "react";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

type Props = {};

const Register = (props: Props) => {
	return (
		<div>
			<Navbar />
			<div className="min-h-screen flex justify-center py-[30px]">
				<RegisterForm />
			</div>

			<Footer />
		</div>
	);
};

export default Register;
