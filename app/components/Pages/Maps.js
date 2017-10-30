import React from 'react';
import MapComponent from '../MapComponent';

var fullHeight = {
  height: '100%'
};

var padding = {
  marginTop: '2em'
};


class Maps extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="panel">
              <div className="panel-body">
                <h3>Maps</h3>
                <h4 style={padding}>G</h4>
                <MapComponent level={0}/>
                <h4 style={padding}>1</h4>
                <MapComponent level={1}/>
                <h4 style={padding}>2</h4>
                <MapComponent level={2}/>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="panel">
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