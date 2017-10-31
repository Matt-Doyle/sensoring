import React from 'react';
import {connect} from 'react-redux';

// Patrick, all the datapoints are in the variable 'this.props.graph.data' and they are stored in a dictionary
// See if you can get your graph working with this.

class MapGraph extends React.Component {

}

const mapStateToProps = (state) => {
    return {
        graph: state.graph
    }
}

export default connect(mapStateToProps)(MapGraph);