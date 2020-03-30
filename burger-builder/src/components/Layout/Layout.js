import React from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Auxillary/Auxillary';
const Layout = (props) =>{
    return (
        <Aux>
            <div>Toolbar</div>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    )
}

export default Layout;