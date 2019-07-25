import React from 'react'
import { Grid, GridColumn } from '@progress/kendo-react-grid'

const Table = ( props ) => {


return(
      <Grid data={props.data}>
            <GridColumn field="ProductName" title="Product name"/>
            <GridColumn field="Price"/>
     </Grid>
)
    


}

export default Table