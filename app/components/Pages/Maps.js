import React from 'react';
import MapComponent from '../MapComponent';
import {connect} from 'react-redux';
import {setGraphMetrics, setGraphTimescale} from '../../actions/get_data';

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

    this.setState(Object.assign({}, this.state, {activatedMetrics: activatedMetrics}))

    var metrics = [];

    for (var k in activatedMetrics) {
      metrics.push(k);
    }
    
    this.props.dispatch(setGraphMetrics(this.props.graph, metrics));
  }

  handleTimescaleClick(timescale) {
    this.props.dispatch(setGraphTimescale(this.props.graph, timescale));
  }

  getMetricClass(metric) {
    return "btn btn-" + (this.state.activatedMetrics[metric] ? "success" : "danger") + " graphMetricBtn";
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
                <button className={this.getMetricClass("temperature")} onClick={() => { this.handleMetricClick("temperature") }}>Temperature</button>
                <button className={this.getMetricClass("humidity")} onClick={() => { this.handleMetricClick("humidity") }}>Humidity</button>
                <button className={this.getMetricClass("lightIntensity")} onClick={() => { this.handleMetricClick("lightIntensity") }}>Light Intensity</button>
                <button className={this.getMetricClass("soundIntensity")} onClick={() => { this.handleMetricClick("soundIntensity") }}>Sound Intensity</button>
                <h6>Timescale</h6>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn" onClick={()=>{this.handleTimescaleClick("r-365d")}}>Year</button>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn" onClick={()=>{this.handleTimescaleClick("r-30d")}}>Month</button>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn" onClick={()=>{this.handleTimescaleClick("r-1w")}}>Week</button>
                <button className="btn btn-outline-secondary btn-sm graphMetricBtn" onClick={()=>{this.handleTimescaleClick("r-1d")}}>Day</button>
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