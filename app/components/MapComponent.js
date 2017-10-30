import React from 'react';
import PropTypes from 'prop-types';
import MapRoom from './MapRoom';

class MapComponent extends React.Component {
    render() {
        var floorMap;
        var level = this.props.level;
        var clickCallback = this.props.setGraph;

        switch (level) {
            case 1:
            case 2:
                floorMap = (
                    <div className="mapLayout">
                        <div className="mapUpper">
                            <MapRoom rooms={["B3", "B4"]} level={level} onClick={() => {console.log("ran")}}></MapRoom>
                            <MapRoom rooms={["L1", "L2"]} level={level}></MapRoom>
                            <MapRoom rooms={["L3"]} level={level}></MapRoom>
                            <MapRoom rooms={["L4", "L5"]} level={level}></MapRoom>
                            <MapRoom rooms={["B9", "B10"]} level={level}></MapRoom>
                        </div>

                        <div className="mapCenter">
                            <MapRoom></MapRoom>
                            <MapRoom hide={true}></MapRoom>
                            <MapRoom></MapRoom>
                            <MapRoom hide={true}></MapRoom>
                            <MapRoom></MapRoom>
                        </div>

                        <div className="mapLower">
                            <div className="mapTuteRoomBlock">
                                <MapRoom rooms={["T1"]} level={level}></MapRoom>
                                <MapRoom rooms={["T2"]} level={level}></MapRoom>
                            </div>
                            <MapRoom rooms={["B1", "B2"]} level={level}></MapRoom>
                            <MapRoom></MapRoom>
                            <MapRoom rooms={["B5"]} level={level}></MapRoom>
                            <MapRoom></MapRoom>
                            <MapRoom rooms={["B6", "B7"]} level={level}></MapRoom>
                            <div className="mapTuteRoomBlock">
                                <MapRoom rooms={["T3"]} level={level}>{level}T3</MapRoom>
                                <MapRoom rooms={["T4"]} level={level}>{level}T4</MapRoom>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 0:
                floorMap = (<div className='mapFloor'></div>);
                break;
            default:
                throw new Error("Default Ran");
        }

        return (
            <div>
                {floorMap}
            </div>
        )
    }
}

MapComponent.propTypes = {
    level: PropTypes.number.isRequired,
}

export default MapComponent;