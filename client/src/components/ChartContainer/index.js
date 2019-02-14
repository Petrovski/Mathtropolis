import React, { Component } from 'react';
import Chart from '../Chart/index';


class ChartContainer extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Course A', 'Course B', 'Course C', 'Course D', 'Course E'],
                datasets: [
                    {
                        label: 'Completion Progress in %',
                        data: [
                            10,
                            20,
                            3,
                            1,
                            1
                        ],
                        backgroundColor: [
                            'rgba(200, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Chart chartData={this.state.chartData} legendPosition="top" />
            </div>
        );
    }
}

export default ChartContainer;