import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class Chart extends Component{

    state = {
        chartLinesData:this.props.linesData
    }

    render(){
        return(
            <Line data={this.state.chartLinesData}
                  width={300}
                  height={150}
                  options={{
                    maintainAspectRatio: false
                  }}
            />
        )
    }
}

export default Chart;