import React from 'react'
import BackButton from '../components/BackButton'
import styles from '../styles/pages/page.module.scss'

export default function Projects() {
    return (
        <div className={styles.main}>
            <BackButton />
            <section>
                <h1 id="projects" className={styles.projects}>
                    Projectos
                </h1>
            </section>
            <section id="content">
                <p>Aca un parrafo con Lorem Ipsum</p>
            </section>
        </div>
    )
}
