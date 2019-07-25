import React from 'react'
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';
// import '@progress/kendo-theme-material/dist/all.css';

const Buttons = ( props ) => {
return(
    <div className='buttons-right'>
    <Button primary={true}>Share</Button>
    <Button>Export to PDF</Button>
    </div>
)
}

export default Buttons