import React from 'react'
import styles from './Navbar.module.css'

const cities = [
    { "key": 1, "city": "Kanpur" },
    { "key": 2, "city": "Delhi" },
    { "key": 3, "city": "Bhopal" },
]

function Navbar() {
    return (<>
        <div className={styles.navbar_Cont}>
            <div className={styles.navbar}>
                <div className={styles.job_section_1}>
                    <p>Job Hunt</p>
                    <p>Find Jobs</p>
                    <p>Upskill yourself</p>
                </div>
                <div className={styles.job_section_2}>
                    <p>Post Job</p>
                    <p>Sign In</p>
                </div>
            </div>
            <div className={styles.description}>
                <h1>FIND YOUR DREAM JOB</h1>
                <p>Browser through thousands of full-time or part-time jobs near you</p>
            </div>
        </div>
        <div className={styles.search_section}>
            <div >
                <input className={styles.input} type="text" placeholder="job title or keyboard" />
            </div>
            <select className={styles.search_select} >
                {cities.map(el =>
                    <option key={el.key} value={el.key}>{el.city}</option>
                )};
            </select>
            <div>
                <button className={styles.search_btn}>Search</button>
            </div>
        </div>
    </>)
}

export default Navbar
