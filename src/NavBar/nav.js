import React from 'react'
import Aux from '../HOC/Aux'
import { HashLink as Link } from 'react-router-hash-link';
import {withRouter} from 'react-router-dom'

const NavBar = ( props ) => {


    return (
        <Aux>
       
        <header>
        <nav className={props.location.pathname === '/' ? 'ToolbarHome' : 'Toolbar'}>
                <Link to='/'>Home</Link>
                <Link to='/table'>Table</Link>
                <Link to='/chart'>Chart</Link>
                </nav>

        </header>
       

        </Aux>
    )
}
 
export default withRouter(NavBar)