import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGraphData} from '../actions/get_data';


class MapRoom extends React.Component {
    handleClick() {
        this.props.dispatch(getGraphData(this.props.level, this.props.rooms, this.props.metrics, this.props.timescale));
    }

    render() {
        var level = this.props.level;
        var rooms = this.props.rooms;

        if (rooms == undefined) {
            rooms = [];
        }

        var rooms = rooms.map((room) => {
           return level + room
        })
        
        return (
            <div className={this.props.hide ? "mapEmptyArea" : "mapRoom"} style={{cursor: "pointer", userSelect: "none"}} onClick={this.handleClick.bind(this)}>
                {rooms.join(" & ")}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {
        timescale: state.graph.timescale,
        metrics: state.graph.metrics
    });
}

export default connect(mapStateToProps)(MapRoom);