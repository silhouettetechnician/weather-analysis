import React from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import 'hammerjs';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';


const LineChart = ( props ) => {

    const barChartDays = ["21st June 2017", "28th June 2018", "25th July 2019"]
    const data = [props.chartDataone, props.chartDatatwo, props.chartDatathree]

    console.log(data)
    const temperatureHot = data.map(item => item.temperatureMax)
    const temperatureCold = data.map(item => item.temperatureMin)
    const dewPoint = data.map(item => item.dewPoint)
    const windGust = data.map(item => item.windGust)
    
    return (  
        
          <Chart style={{ height: 400, width: 600, backgroundColor: 'transparent'}}>
            <ChartLegend visible={true} />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={barChartDays} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
              {/* {
                data.map((item, idx) => ( */}

                  <ChartSeriesItem name='Temperature High' type="column" data={temperatureHot} gap={2}/>
                  <ChartSeriesItem name='Temperature Low' type="column" data={temperatureCold} gap={2}/>
                  <ChartSeriesItem name='Dew Point' type="column" data={dewPoint} gap={2}/>
                  <ChartSeriesItem name='Wind Gust' type="column" data={windGust} gap={2}/>
                {/* ))} */}
            </ChartSeries>
            <ChartValueAxis skip={4}>
              <ChartValueAxisItem color="#black" skip={2} />
            </ChartValueAxis>
          </Chart>
        
     )
}
 
export default LineChart;