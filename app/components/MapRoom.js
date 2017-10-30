import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'


class MapRoom extends React.Component {
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
            <div className={this.props.hide ? "mapEmptyArea" : "mapRoom"} style={{cursor: "pointer", userSelect: "none"}} onClick={() => {console.log("hi")}}>
                {rooms.join(" & ")}
            </div>
        )
    }
}

export default MapRoom;