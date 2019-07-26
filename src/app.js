import React from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import Aux from './HOC/Aux'
import Chart from './Chart'
import Home from './Home'
import { BrowserRouter as Browser, Switch, Route, Link } from 'react-router-dom'
import { Ripple } from '@progress/kendo-react-ripple';
import '@progress/kendo-theme-material/dist/all.css';
import '@progress/kendo-theme-default/dist/all.css'
import './App.css';
import 'bootstrap-4-grid/css/grid.min.css';
import './app.css'

class App extends React.Component{
    constructor( props ){
        super( props )
        this.state = {
            
            isLoading: true,
           
        }
        this.appContainer = React.createRef()
    }


render(){

        return (
      <Aux>
        <Browser>
            <Switch>
          <Ripple>
           
                <nav>
                <Link to='/table'>Table</Link>
                <Link to='/chart'>Chart</Link>
                <Link to='/'>Home</Link>
                </nav>


           <Route exact path='/table' component={Table} />
           <Route exact path='/chart' component={Chart} />    
            <Route exact path='/' component={Home} />
          
    
        
        
          </Ripple>
          </Switch>
          </Browser>
      </Aux>
      )
  }
  }
  ReactDOM.render(<App />, 
  document.getElementById('root'));