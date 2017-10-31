import React from 'react';
import MapComponent from '../MapComponent';
import {connect} from 'react-redux';

var mapTitlePadding = {
  marginTop: '2em'
};

var buttonMargin = {
  marginRight: '0.25em'
};

class Maps extends React.Component {
  constructor(props) {
    super(props);

    var metrics = props.graph.metrics;

    var metricsDictionary = {};

    for (var i = 0; i < metrics.length; i++) {
      metricsDictionary[metrics[i]] = true;
    }

    this.state = {
      activatedMetrics: metricsDictionary
    }
  }

  handleMetricClick(metric) {
    var activatedMetrics = this.state.activatedMetrics;
    activatedMetrics[metric] = !activatedMetrics[metric];

    console.log(this.state);
    this.setState(Object.assign({}, this.state, {activatedMetrics: activatedMetrics}))

    var metrics = [];

    for (k in this.activatedMetrics) {
      metrics.push(k);
    }

    this.props.dispatch({type: 'GRAPH_METRICS_UPDATED', metrics: metrics})
  }

  handleTimescaleClick() {

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="panel">
              <div className="panel-body">
                <h3>Maps</h3>
                <h4 style={mapTitlePadding}>G</h4>
                <MapComponent level={0}/>
                <h4 style={mapTitlePadding}>1</h4>
                <MapComponent level={1}/>
                <h4 style={mapTitlePadding}>2</h4>
                <MapComponent level={2}/>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel">
              <div className="panel-body">
                <h3>Real-time Graphs</h3>
                <h5>Choose Graph Metric</h5>
                <button className={"btn btn-" + (this.state.activatedMetrics["temperature"] ? "success" : "danger") + " graphMetricBtn"} onClick={() => { this.handleMetricClick("temperature") }}>Temperature</button>
                <button className={"btn btn-" + (this.state.activatedMetrics["humidity"] ? "success" : "danger") + " graphMetricBtn"} onClick={() => { this.handleMetricClick("humidity") }}>Humidity</button>
                <button className={"btn btn-" + (this.state.activatedMetrics["lightIntensity"] ? "success" : "danger") + " graphMetricBtn"} onClick={() => { this.handleMetricClick("lightIntensity") }}>Light Intensity</button>
                <button className={"btn btn-" + (this.state.activatedMetrics["soundIntensity"] ? "success" : "danger") + " graphMetricBtn"} onClick={() => { this.handleMetricClick("soundIntensity") }}>Sound Intensity</button>
                <h6>Timescale</h6>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn">Year</button>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn">Month</button>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn">Week</button>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn">Day</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      graph: state.graph
  }
}

export default connect(mapStateToProps)(Maps);