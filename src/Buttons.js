import React from 'react'
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';
// import '@progress/kendo-theme-material/dist/all.css';

const Buttons = ( props ) => {
return(
    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right'>
    <Button primary={true} onClick={props.share} >Share</Button>
    <Button onClick={props.pdf}>Export to PDF</Button>
    </div>
)
}

export default Buttons