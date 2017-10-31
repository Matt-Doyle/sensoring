import React from 'react';
import {connect} from 'react-redux';

// Patrick, all the datapoints are in the variable 'this.props.data' and they are stored in a dictionary
// See if you can get your graph working with this.

class MapGraph extends React.Component {

}

const mapStateToProps = (state) => {
    return {
        data: state.graph.data
    }
}

export default connect(mapStateToProps)(MapGraph);