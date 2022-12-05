import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	FaBeer,
	FaFacebook,
	FaFacebookF,
	FaFacebookSquare,
	FaInstagram,
	FaInstagramSquare,
	FaLinkedin,
	FaLinkedinIn,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className=" justify-between flex">
			<div>
				<p>
					<b>Creado por</b> <span className="text-red-500">MoviesTecsup. </span>
					<span className="text-gray-400">Derechos reservados 2022</span>
				</p>
			</div>
			<div className="flex flex-row space-x-6 items-center">
				<p className="text-gray-400">Siguenos en: </p>
				<FaInstagram size={25} />
				<FaLinkedin size={25} />
				<FaFacebookSquare size={25} />
			</div>
		</footer>
	);
};

export default Footer;
