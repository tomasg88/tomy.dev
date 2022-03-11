import React from "react";
import Link from "next/link";
import useDynamicMousePushing from "../hooks/useDynamicMousePushing";
import { motion } from "framer-motion";

export default function LandingButton({ name, href, buttonStyle }) {
	const refElement = useDynamicMousePushing();

	return (
		<div
			ref={refElement}
			className={`${buttonStyle} big-button flex flex-jc-c flex-ai-c`}
		>
			<Link href={href}>
				<motion.a
					animate={{ scale: 1.2 }}
					transition={{ duration: 0.5 }}
				>
					{name}
				</motion.a>
			</Link>
		</div>
	);
}
