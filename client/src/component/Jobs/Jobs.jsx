import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JobCard from './JobCard'
import styles from './job.module.css'




function Jobs() {
    const [jobs, setJobs] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:4000/jobs`)
            .then(res => setJobs(res.data))


    }, [])

    console.log(jobs)

    return (
        <div className={styles.jobsContainer}>
            <div className={styles.jobInnerContainer}>
                {jobs.map(el =>
                    <JobCard key={el.id} el={el} />
                )};
            </div>
        </div>
    )
}

export default Jobs
