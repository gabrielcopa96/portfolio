import React from 'react';
import styles from "./sidebar.module.scss";
import Logo from '../Logo/Logo';

const SideBar = () => {
    return (
        <nav className={styles.sidebar}>
            <Logo />
        </nav>
    )
}

export default SideBar;