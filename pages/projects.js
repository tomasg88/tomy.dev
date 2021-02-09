import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import styles from '../styles/pages/page.module.scss'
console.log("🚀 ~ file: projects.js ~ line 5 ~ styles", styles)

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
