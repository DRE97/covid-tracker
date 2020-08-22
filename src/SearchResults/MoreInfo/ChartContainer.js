import React from 'react';
import { Chart } from "react-google-charts"

function ChartContainer(props) {
    const data = props.historicalData;
    
    return (
        <Chart
            width={'600px'}
            height={'400px'}
            chartType="AreaChart"
            loader={<h5>Loading Chart...</h5>}
            data={data}
            options={{
                title: 'Last Month',
                isStacked: false,
                height: 300,
                legend: { position: 'right', maxLines: 3 },
                vAxis: { minValue: 10000 },
            }}
            rootProps={{ 'data-testid': '3' }}
        />
    )
}

export default ChartContainer;