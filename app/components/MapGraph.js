import React from 'react';
import {connect} from 'react-redux';
import {LineChart, Line} from 'recharts';


// Patrick, all the datapoints are in the variable 'this.props.graph.data' and they are stored in a dictionary
// See if you can get your graph working with this.

class MapGraph extends React.Component {

    componentDidMount() {
        var ctx = document.getElementById("mapGraph");

        var dataset = this.props.graph.data;

        //Set up new graphs data and options
        var chartThings = {
            type: 'line',
            data: {
                labels: graphDataIndex,
                datasets: [{
                    label: currentData,
                    data: graphData,
                    backgroundColor: '#FFFFFF',
                    fill: false,
                    lineTension: 0.5,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{display: false}]
                },
                legend: {display: false }
            }
        }
    
        //Create the new graph with the new data
        myChart = new Chart(ctx, chartThings)
    
    }

    render() {
        return (
            <div>
                <canvas id="mapGraph"></canvas>
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