import React from 'react';
import styles from "./logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.logo_container}>
            <span className={styles.logo} onClick={() => {
                document.location.hash === "" ?
                    document.getElementById("main")?.scrollIntoView() :
                    document.location.hash = '';
            }}>
                GC<span>.</span>
            </span>
            <span>Admin</span>
        </div>
    )
}

export default Logo