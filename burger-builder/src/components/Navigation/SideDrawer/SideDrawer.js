import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'
const sideDrawer = (props) =>{
    let attachedClasses = props.open ? [classes.SideDrawer,classes.Open] : [classes.SideDrawer,classes.Close];
    

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.clicked}/>
        <section  className={attachedClasses.join(' ')}> 
            <Logo height="80px" />
            <section>
                <NavigationItems/>
            </section>
        </section>
        </Aux>
    )
}

export default sideDrawer;