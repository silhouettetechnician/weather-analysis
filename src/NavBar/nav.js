import React from 'react'
import Aux from '../HOC/Aux'
import Chart from '../Chart'
import Table from '../Table'
import { HashLink as Link } from 'react-router-hash-link';
import {BrowserRouter as Broswer} from 'react-router-dom'

const NavBar = ( props ) => {
    return (
        <Aux>
        <Broswer>
        <header>
            <nav>
                <Link to=
                <Link to='/Chart#Chart'>Chart</Link>
                <Link to='/Table#Table'>Table</Link>
            </nav>
        </header>
        </Broswer>

        </Aux>
    )
}
 
export default NavBar