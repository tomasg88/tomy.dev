import React, { useCallback } from "react";
import Link from "next/link";
import useDynamicMousePushing from "../hooks/useDynamicMousePushing";
import { motion } from "framer-motion";

export default function LandingButton({ name }) {
    const refElement = useDynamicMousePushing();

    const capitalize = useCallback(
        (text) => {
            return text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
        },
        [name],
    )
    
	return (
		<div
			ref={refElement}
			id={name}
			className="big-button flex flex-jc-c flex-ai-c"
		>
            <Link href={'/'+name}>
                <motion.a 
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                >
                    {capitalize(name)}
                </motion.a>
            </Link>
		</div>
	);
}
