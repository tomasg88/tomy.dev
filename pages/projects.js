import React from 'react'
import Background from '../components/Background'
import styles from '../styles/page.module.scss'

export default function Projects() {
    return (
        <>
            <Background />
            <div className={styles.main}>
                <section>
                    <h3 className={styles.title}>
                        Projectos
                    </h3>
                </section>
                <section id="content">
                    <p>Aca un parrafo con Lorem Ipsum</p>
                </section>
            </div>
        </>
    )
}
