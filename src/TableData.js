import React from 'react'


const TableData = ( props ) => {

    return ( 
        <table className="table-fill">
            <thead>
                <tr>
    
                    <th className="text-left">Date</th>
                    <th className="text-left">Summary</th>
                    <th className="text-left">Wind Gust</th>
                    <th className="text-left">Wind Speed</th>
                    <th className="text-left">Temperature High</th>
                    <th className="text-left">Temperature Low</th>
                    <th className="text-left">Humidity</th>
                    <th className="text-left">Pressure</th>
                    <th className="text-left">Cloud Cover</th>
                    <th className="text-left">Sunrise</th>
                    <th className="text-left">Sunset</th>
                    
                </tr>
            </thead>
            <tbody className="table-hover">
                <tr>
                    <td className="text-left">21st June 2017</td>
                    <td className="text-left">{props.tableDataOne.summary}</td>
                    <th className="text-left">{props.tableDataOne.windGust}</th>
                    <th className="text-left">{props.tableDataOne.windSpeed}</th>
                    <th className="text-left">{props.tableDataOne.temperatureMax}</th>
                    <th className="text-left">{props.tableDataOne.temperatureMin}</th>
                    <th className="text-left">{props.tableDataOne.humidity}</th>
                    <th className="text-left">{props.tableDataOne.pressure}</th>
                    <th className="text-left">{props.tableDataOne.cloudCover}</th>
                    <th className="text-left">{props.tableDataOne.sunriseTime}</th>
                    <th className="text-left">{props.tableDataOne.sunsetTime}</th>
                    
                </tr>
                <tr>
                <td className="text-left">28th June 2018</td>
                    <td className="text-left">{props.tableDataTwo.summary}</td>
                    <th className="text-left">{props.tableDataTwo.windGust}</th>
                    <th className="text-left">{props.tableDataTwo.windSpeed}</th>
                    <th className="text-left">{props.tableDataTwo.temperatureMax}</th>
                    <th className="text-left">{props.tableDataTwo.temperatureMin}</th>
                    <th className="text-left">{props.tableDataTwo.humidity}</th>
                    <th className="text-left">{props.tableDataTwo.pressure}</th>
                    <th className="text-left">{props.tableDataTwo.cloudCover}</th>
                    <th className="text-left">{props.tableDataTwo.sunriseTime}</th>
                    <th className="text-left">{props.tableDataTwo.sunsetTime}</th>
                </tr>
                <tr>
                <td className="text-left">25th July 2019</td>
                    <td className="text-left">{props.tableDataThree.summary}</td>
                    <th className="text-left">{props.tableDataThree.windGust}</th>
                    <th className="text-left">{props.tableDataThree.windSpeed}</th>
                    <th className="text-left">{props.tableDataThree.temperatureMax}</th>
                    <th className="text-left">{props.tableDataThree.temperatureMin}</th>
                    <th className="text-left">{props.tableDataThree.humidity}</th>
                    <th className="text-left">{props.tableDataThree.pressure}</th>
                    <th className="text-left">{props.tableDataThree.cloudCover}</th>
                    <th className="text-left">{props.tableDataThree.sunriseTime}</th>
                    <th className="text-left">{props.tableDataThree.sunsetTime}</th>
                </tr>
            </tbody>
        </table>

     );
}
 
export default TableData;