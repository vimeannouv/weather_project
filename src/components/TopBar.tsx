import React from 'react'
import styles from "./TopBar.module.css"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.locationInput}>
                <div className="input-group">
                    <span className="input-group-text" id="addon-wrapping">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input type="text" className="form-control" placeholder="Search Location" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
        </div>
    )
}

export default TopBar