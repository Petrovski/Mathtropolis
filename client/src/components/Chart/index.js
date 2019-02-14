import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
// import { defaults } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
    }

    render() {
        return (
            <div className="chart">
            <div className="row chart-row">
                <div className="col-lg-6">
                    <Bar
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Progress by Course',
                                fontSize: 35
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                </div>

                <div className="col-lg-6">
                    <Line
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'Time spent on Courses',
                                fontSize: 35
                            },
                            legend: {
                                display: 'Course hours',
                                position: this.props.legendPosition
                            }
                        }}
                    />
                </div>

            </div>
                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Modules completed per course',
                            fontSize: 30
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;