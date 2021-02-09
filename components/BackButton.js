import React from 'react'
import { useRouter } from "next/router";
import styles from "../styles/components/backbutton.module.scss";

export default function BackButton() {
    const router = useRouter();
    return (
        <div
            className={`${styles.backbutton} flex flex-jc-c flex-ai-c`}
            onClick={() => router.back()}
        >
            volver
        </div>
    )
}
