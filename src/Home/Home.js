import React from 'react'
import axios from 'axios'
import Aux from '../HOC/Aux'

class Home extends React.Component{

    componentDidMount(){

    }
    render(){
    return(
    <Aux>
        <div className='Home'>
    <div className='TitleHome'>
        Analysis of the Hottest days in London over the last three years (2017, 2018, 2019)
    </div>
    <div>
        <div>
        <a className="weatherwidget-io" href="https://forecast7.com/en/51d51n0d13/london/" data-label_1="LONDON" data-label_2="WEATHER" data-theme="original" data-basecolor="#232a2e" >LONDON WEATHER</a>
    </div>
        <div className='iframeContainer'>

        <iframe width="460" height="260" align="center" src="https://www.youtube.com/embed/U6hRTzZ9Sjk?start=3" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
    </div>
    <footer>Made with care by Timothy Millward</footer>
    </Aux>
    )
    }
}

export default Home