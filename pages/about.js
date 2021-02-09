import React from 'react'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import styles from '../styles/pages/page.module.scss'

export default function About() {
    return (
        <div className={styles.main}>
            <BackButton />
            <section>
                <h3 className={styles.title}>
                    About
                </h3>
            </section>
            <section id="content">
                <p>Aca un parrafo con Lorem Ipsum</p>
            </section>
        </div>
    )
}
