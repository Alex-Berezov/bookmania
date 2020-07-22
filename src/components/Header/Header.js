import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <section className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <h3>Logo</h3>
                </div>
            </div>
        </section>
    )
}

export default Header;