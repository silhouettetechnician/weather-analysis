import React from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import Aux from './HOC/Aux'
import axios from 'axios'
import Button from './Buttons'
import './app.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            weather2017: ''
        }
    }

componentDidMount(){
    console.log('componentDidMount')
    axios.get('http://localhost:4000/api/forecast2017')
    .then(res => this.setState({ weather: res.data.daily.data }))
    .catch(err => console.log(err))
}

render(){
    console.log(this.state.weather)
  const { weather } = this.state
      return (
  
      <Aux>
      <header className="App-header">
        <h1>Hottest day of the year in London comparison 2017-2018-2019</h1>
      </header>
      <h1></h1>
      <Table 
      forecast={this.state.weather}
      />
      <Button/>
      </Aux>
      )
  }
  }
  ReactDOM.render(<App />, 
  document.getElementById('root'));