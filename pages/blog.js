import React from 'react'
import Background from '../components/Background'
import styles from '../styles/page.module.scss'

export default function Blog() {
    return (
        <>
            <Background />
            <div className={styles.main}>
                <section>
                    <h3 className={styles.title}>
                        Blog
                    </h3>
                </section>
                <section id="content">
                    <p>Aca un parrafo con Lorem Ipsum</p>
                </section>
            </div>
        </>
    )
}
