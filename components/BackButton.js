import React, { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../styles/components/backbutton.module.scss";
import { ROUTES } from "../constants/contants";

export default function BackButton() {
	const router = useRouter();
	const handleClick = useCallback(() => {
		router.push(ROUTES.home);
	});
	return (
		<div
			className={`${styles.backbutton} flex flex-jc-c flex-ai-c`}
			onClick={handleClick}
		>
			volver
		</div>
	);
}
