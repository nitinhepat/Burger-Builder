import Aux from "../../hoc/Aux";
import React from 'react';
import classes from './Layout.css'
const Layout = (props) =>{
    return (
        <Aux>
            <div>Toolbar</div>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
    )
}

export default Layout;