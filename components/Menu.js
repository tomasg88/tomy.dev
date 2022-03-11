import React, { useState, useEffect, useCallback } from "react";
import { Hamburger } from "./Hamburger";
import LandingButton from "./LandingButton";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ROUTES } from "../constants/contants";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	// if menu is open then hide on route change
	useEffect(() => {
		setIsOpen(false);
	}, [router.pathname]);

	const handleHamburguerClick = useCallback(
		() => setIsOpen(!isOpen),
		[isOpen]
	);

	return (
		<motion.div
			initial={"hidden"}
			animate="visible"
			className="menu"
			variants={{
				hidden: {
					opacity: 0,
					scale: 0,
				},
				visible: {
					scale: 1,
					opacity: 1,
				},
			}}
		>
			<div className="button-container flex">
				<Hamburger
					isOpen={isOpen}
					handleClick={handleHamburguerClick}
				/>
			</div>

			<div className={`menu-content ${isOpen ? "open" : ""}`}>
				<LandingButton
					buttonStyle={"About".toLowerCase()}
					href={ROUTES.about}
					name="About"
				/>
				<LandingButton
					buttonStyle={"Projects".toLowerCase()}
					href={ROUTES.projects}
					name="Projects"
				/>
				<LandingButton
					buttonStyle={"Blog".toLowerCase()}
					href={ROUTES.blog}
					name="Blog"
				/>
				<LandingButton
					buttonStyle={"Contact".toLowerCase()}
					href={ROUTES.contact}
					name="Contact"
				/>
			</div>
		</motion.div>
	);
}
