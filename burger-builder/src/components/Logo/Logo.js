import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const Logo = () => {
    return (
        <section className={classes.Logo} style={{
            height: props.height
        }}>
            <img src={burgerLogo}/>
        </section>
    )
}

export default Logo;