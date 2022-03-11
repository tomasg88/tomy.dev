import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import LandingButton from "./LandingButton";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	// if menu is open then hide on route change
	useEffect(() => {
		setIsOpen(false);
	}, [router.pathname]);

	return (
		<motion.div>
			<div className="menu">
				<div className="button-container flex">
					<Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>

				<div className={`menu-content ${isOpen ? "open" : ""}`}>
					<LandingButton name="about" />
					<LandingButton name="projects" />
					<LandingButton name="blog" />
					<LandingButton name="contact" />
				</div>
			</div>
		</motion.div>
	);
}
