import React from 'react';
import MapComponent from '../MapComponent';

var fullHeight = {
  height: '100%'
};

class Maps extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row row-eq-height">
          <div className="col-md-7">
            <div className="panel" style={fullHeight}>
              <div className="panel-body">
                <h3>Map of Level G</h3>
                <MapComponent level={0}/>
                <h3>Map of Level 1</h3>
                <MapComponent level={1}/>
                <h3>Map of Level 2</h3>
                <MapComponent level={2}/>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="panel" style={fullHeight}>
              <div className="panel-body">
                <h3>Real-time Graphs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Maps;