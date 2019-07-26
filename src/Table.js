import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TableData from './TableData'
import Buttons from './Buttons'
import { Button } from '@progress/kendo-react-buttons';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs'; 
import { Grid, GridColumn } from '@progress/kendo-react-grid'
import { savePDF } from '@progress/kendo-react-pdf';

class Table extends React.Component{
    constructor( props ){
        super( props )
        this.state = {
            showDialog: false,
            isLoading: true,
            tableWeather17: '',
            tableWeather18: '',
            tableWeather19: ''
        }
        this.appContainer = React.createRef()

    }

    componentDidMount(){
        console.log('componentDidMount')
        axios.get('http://localhost:4000/api/forecast2017')
        .then(res => {
            this.setState({ tableWeather17: res.data.daily.data[0]})
        })
        .catch(err => console.log(err))
        .then(
        axios.get('http://localhost:4000/api/forecast2018')
        .then(res => {
            this.setState({ tableWeather18: res.data.daily.data[0] })
        })
        .catch(err => console.log(err))
        )
        .then(
        axios.get('http://localhost:4000/api/forecast2019')
        .then(res => {
            this.setState({ tableWeather19: res.data.daily.data[0] })
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

        const { tableWeather17, tableWeather18, tableWeather19 } = this.state
    return(
        <div className="bootstrap-wrapper" ref={(el) => this.appContainer = el}>
            <div className="app-container container">
            <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                <h1>Table analysis</h1>
                <Buttons className='buttons' pdf={this.handlePDFExport} share={this.handleShare}/>
            </div>
            </div>
            <div className="row1">
            
            <div>
                
            <TableData
                tableDataOne={tableWeather17}
                tableDataTwo={tableWeather18}
                tableDataThree={tableWeather19}
            />
            
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

        )
    }
}



export default Table