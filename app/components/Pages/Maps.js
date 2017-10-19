import React from 'react';
import MapComponent from '../MapComponent';

class Maps extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MapComponent level={1}/>
      </div>
    )
  }
}

export default Maps;