import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setGraphPosition} from '../actions/get_data';


class MapRoom extends React.Component {
    handleClick() {
        this.props.dispatch(setGraphPosition(this.props.graph, this.props.level, this.props.rooms));
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
        graph: state.graph
    });
}

export default connect(mapStateToProps)(MapRoom);