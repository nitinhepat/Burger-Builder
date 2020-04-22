import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Logo from '../../Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';


const Toolbar = () =>{
    return (
        <Aux>
            <DrawerToggle/>
            <Logo/>
            

        </Aux>
    )
}