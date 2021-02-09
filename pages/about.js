import React from 'react'
import Background from '../components/Background'
import styles from '../styles/page.module.scss'

export default function About() {
    return (
        <>
            <Background />
            <div className={styles.main}>
                <section>
                    <h3 className={styles.title}>
                        About
                    </h3>
                </section>
                <section id="content">
                    <p>Aca un parrafo con Lorem Ipsum</p>
                </section>
            </div>
        </>
    )
}
