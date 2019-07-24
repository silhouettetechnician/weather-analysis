import React from 'react'
import ReactDOM from 'react-dom'
// import Table from './components/Table'
import Aux from './HOC/Aux'
import axios from 'axios'
import './app.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            forecast: ''
        }
    }

componentDidMount(){
    console.log('componentDidMount')
    axios.get('http://localhost:4000/api/forecast')
    .then(res => console.log(res.data))
}
render(){
  
    // console.log(forecast)
      return (
  
      <Aux>
      <header className="App-header">
        <h1>Hottest day of the year in London comparison 2017-2018-2019</h1>
      </header>
      <h1></h1>
      </Aux>
      )
  }
  }
  ReactDOM.render(<App />, 
  document.getElementById('root'));