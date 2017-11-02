import React from 'react';
if (typeof window !== 'undefined')
    Chart = require('chart.js').Chart;


class ChartComponent extends React.Component {

    componentDidMount() {
        var ctx = this.canvas.getContext('2d');
        var chartObject = new Chart(ctx, this.props.chartData);

        this.setState({chart: chartObject});
    }
    
    componentDidUpdate() {
        this.state.chart.data = this.props.chartData.data;

        this.state.chart.update();
    }


    render() {

        console.log(this.props.chartData);

        return (
            <canvas ref={(component)=>{this.canvas = component}}></canvas>
        );
    }
}

export default ChartComponent;