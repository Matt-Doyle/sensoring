import React from 'react';
import {connect} from 'react-redux';
import ChartComponent from './ChartComponent';

// Patrick, all the datapoints are in the variable 'this.props.graph.data' and they are stored in a dictionary
// See if you can get your graph working with this.

class MapGraph extends React.Component {

    constructor() {
        super();

        this.state = {
            charts: [],
        }
    }

    generateCharts(props) {
        
        // dataset is the result from the query and metricList are the metrics that we're going to be graphing.
        var room = props.graph.level + this.props.graph.rooms[0];
        var dataset = props.graph.data[room];

        if (!dataset) {
            return;
        }

        var metricList = props.graph.metrics;
        // When does the graph begin?
        var begginingTime = dataset[0].timestamp;
        var endingTime = dataset[dataset.length - 1].timestamp;

        // Nicely formatted data that can be read by ChartJS
        // Metrics are keys which correspond to arrays of timestamps and datapoints
        // eg: {temperature: [[0, 21], [3.5, 22]]}
        // Where the first value in the nested array is the timestamp and the second is the measured temperature

        var formattedDataset = {};

        // Initialise metric arrays in formattedDataset

        for (var metric = 0; metric < metricList.length; metric++) {
            formattedDataset[metricList[metric]] = [];
        }

        // Turn the datasets into a format readable by ChartJS

        for (var datapoint = 0; datapoint < dataset.length; datapoint++) {
            for (var metric = 0; metric < metricList.length; metric++) {

                var currentMetric = metricList[metric];

                formattedDataset[currentMetric].push({x: (dataset[datapoint].timestamp - begginingTime) / (endingTime - begginingTime), y : dataset[datapoint].metrics[currentMetric]});
            }
        }

        var charts = {};

        for (var k in formattedDataset) {
            var newChart = {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: k,
                        data: formattedDataset[k],
                        backgroundColor: '#FFFFFF',
                        fill: false,
                        lineTension: 0.5,
                    }]
                },
                options: {
                    responsive: true,
                    title:{
                        display:true,
                        text:'Chart.js Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Time (s)'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Metric'
                            }
                        }]
                    },
                    animation: {
                        duration: 0,
                    },
                    hover: {
                        animationDuration: 0,
                    },
                    responsiveAnimationDuration: 0,
                    tooltips: {
                        enabled: false
                   }
                }
            };

            charts[k] = newChart;
        }

        this.setState({chartData: charts});
    }

    componentWillReceiveProps(nextProps) {
        this.generateCharts(nextProps);
    }

    render() {
        var canvasElements = [];

        for (var k in this.state.chartData) {
            canvasElements.push((<ChartComponent chartData={this.state.chartData[k]} key={k}/>));
        }

        return (
            <div>
                {canvasElements}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        graph: state.graph
    }
}

export default connect(mapStateToProps)(MapGraph);