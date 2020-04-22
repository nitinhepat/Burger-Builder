import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = (props) =>{
    console.log('toolbar',classes);
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleHandler}/>
            <Logo height="80%"/>
            
            <div className={classes.DesktopOnly}>
                <NavigationItems />
            </div>

        </header>
    )
}

export default Toolbar;