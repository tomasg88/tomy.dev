import React from 'react'
import Background from '../components/Background'
import styles from '../styles/page.module.scss'
console.log("🚀 ~ file: contact.js ~ line 4 ~ styles", styles)

export default function Contact() {
    return (
        <>
            <Background />
            <div className={styles.main}>
                <section>
                    <h3 className={styles.title}>
                        Título
                    </h3>
                </section>
                <section id="content">
                    <p>Aca un parrafo con Lorem Ipsum</p>
                </section>
            </div>
        </>
    )
}
