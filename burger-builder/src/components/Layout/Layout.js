import React, { Component } from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
       drawerShow: false
    }

    drawerToggleHandler = () =>{
        this.setState((prevState)=>{
            return {drawerShow: !prevState.drawerShow}
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleHandler={this.drawerToggleHandler} />
                <SideDrawer open={this.state.drawerShow} clicked={this.drawerToggleHandler} />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }

}

export default Layout;