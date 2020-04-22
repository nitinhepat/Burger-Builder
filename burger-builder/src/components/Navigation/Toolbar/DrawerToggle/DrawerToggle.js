import React from 'react';

import classes from './DrawerToggle.css';

const DrawerToggle =(props)=>{
    return(
        <section onClick={props.clicked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </section>
    )
}

export default DrawerToggle;