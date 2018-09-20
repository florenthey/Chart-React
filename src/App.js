import React, { Component } from 'react';
import './style/App.css';
import axios from 'axios'
import Table from './components/table/Table'
import Chart from './components/Chart'


class App extends Component {

    state = {
      tabData: [],
      chartData: {}
    }
    
    componentWillMount = () => {
      this.getDataFromServer()
    }
    
    getDataFromServer = () => {
      axios.get("http://localhost:8000")

      .then((response) => {
        const twentyObj = response.data.splice(0,20);

        // const time = twentyObj.map(item =>
        //   item.timestamp
        // );

        const cacData = twentyObj.map(item =>
          item.stocks.CAC40
        );

        const nasData = twentyObj.map(item =>
          item.stocks.NASDAQ
        );

        this.setState({
          tabData:twentyObj,

          chartData:{
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            datasets:[

              { label:"CAC40",
                data:cacData,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },

              { label:"NASDAQ",
                data:nasData,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,30,192,0.4)',
                borderColor: 'rgba(75,30,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,30,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,30,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              }
            ],
          }
        })
        console.log(this.state)
        })
        .catch(function (error) {
          console.log(error);
        })
    }


  render() {

    return (
      <div className="App">
        <h1>One2Team</h1>
        <Chart linesData={() => this.state.chartData}/>
        <Table stateData={this.state.tabData}/>

      </div>
    );
  }
}

export default App;