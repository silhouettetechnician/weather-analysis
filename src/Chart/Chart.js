import React from 'react'
import ReactDOM from 'react-dom'
import LineChart from './LineChart'
import Buttons from '../Buttons'
import Spinner from '../Spinner/Spinner'
import { Button } from '@progress/kendo-react-buttons';
import axios from 'axios'
import { savePDF } from '@progress/kendo-react-pdf';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs'; 
import Aux from '../HOC/Aux'

class Chart extends React.Component{
    constructor( props ){
    super( props )
        this.state = {
            showDialog: false,
            isLoading: true,
            weather17: '',
            weather18: '',
            weather19: ''
        }
        this.appContainer = React.createRef()
    }

    componentDidMount(){
        console.log('componentDidMount')
        axios.get('http://localhost:4000/api/forecast2017')
        .then(res => {
             this.setState({ weather17: res.data.daily.data[0], isLoading: false })
        })
        .then(this.setState({ isLoading: false}))
        .catch(err => console.log(err))
        .then(
        axios.get('http://localhost:4000/api/forecast2018')
        .then(res => {
            this.setState({weather18: res.data.daily.data[0], isLoading: false})
        })
        .catch(err => console.log(err))
        )
        .then(
        axios.get('http://localhost:4000/api/forecast2019')
        .then(res => {
            this.setState({weather19: res.data.daily.data[0], isLoading: false})
        })
        .catch(err => console.log(err))
        )
    }


        handleShare = () => {
            this.setState({ showDialog: !this.state.showDialog })
        }

        handlePDFExport = () => {
            savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
        }

    render(){
        const { weather17, weather18, weather19 } = this.state
        
        if(this.state.isLoading){
        chart = <Spinner />
        }
        let chart = 
        <LineChart
        chartDataone={weather17}
        chartDatatwo={weather18}
        chartDatathree={weather19}
           /> 

    return ( 
        <Aux>
    <div className='bootstrap-wrapper ChartBody' ref={(el) => this.appContainer = el}>
        <div className='app-container container'>
          <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <h1 className='chartHeading'>Visual temperature comparison</h1>
              <div className='buttonContainer'>
              <Buttons className='buttons' pdf={this.handlePDFExport} share={this.handleShare}/>
              </div>
            </div>
          </div>
          <div className="row1">
           
            <div>
               
            {chart}
            
            </div>
          </div>
          {this.state.showDialog &&
            <Dialog title={"Share this report"} onClose={this.handleShare}>
                    <p>Please enter the email address/es of the recipient/s.</p>
                <Input placeholder="example@progress.com" />
                    <DialogActionsBar>
                        <Button primary={true} onClick={this.handleShare}>Share</Button>
                        <Button onClick={this.handleShare}>Cancel</Button>
                 </DialogActionsBar>
            </Dialog>
            }
        </div>
        </div>
        </Aux>
     )
        }
}
 
export default Chart;