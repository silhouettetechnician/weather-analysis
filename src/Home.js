import React from 'react'
import axios from 'axios'
import Aux from './HOC/Aux'

class Home extends React.Component{

    componentDidMount(){

    }
    render(){
    return(
    <Aux>
    <div className='titlehome'>
        Analysis of the Hottest days in London over the last three years (2017, 2018, 2019)
    </div>
    <div>
        <iframe
        style={{textAlign: "center" }}
        src='https://www.youtube.com/embed?v=MbUvTbD9q4A'
        frameBorder=''
        allow='autoplay'
        allowFullScreen
        title='video'

        />
    </div>
    </Aux>
    )
    }
}

export default Home