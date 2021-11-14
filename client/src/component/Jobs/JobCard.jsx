import React from 'react'
import styles from './job.module.css'


function JobCard({ el }) {
    return (
        <div className={styles.jobCardBox}>
            <div className={styles.jobCard} >
                <div  >
                    <img className={styles.image} src={el.image} alt={el.company} />
                </div>
                <div className={styles.desc}>
                    <div className={styles.title}>
                        <h2>{el.title}</h2>
                    </div>
                    <div className={styles.detail} >
                        <p>{el.description}</p>
                    </div>
                    <div className={styles.detail_btn}>
                        <button >
                            view detail                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
