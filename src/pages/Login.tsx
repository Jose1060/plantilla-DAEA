import React from "react";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

type Props = {};

const Login = (props: Props) => {
	return (
		<div>
			<Navbar />
			<div className="min-h-screen flex justify-center py-[30px]">
				<LoginForm />
			</div>

			<Footer />
		</div>
	);
};

export default Login;
