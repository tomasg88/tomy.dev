import React from 'react'
import BackButton from '../components/BackButton'
import Background from '../components/Background'
import styles from '../styles/pages/page.module.scss'

export default function Blog() {
    return (
        <div className={styles.main}>
            <BackButton />
            <section>
                <h1 className={styles.blog}>
                    Blog
                </h1>
            </section>
            <section id="content">
                <p>Aca un parrafo con Lorem Ipsum</p>
            </section>
        </div>
    )
}
