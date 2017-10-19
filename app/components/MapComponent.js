import React from 'react';
import PropTypes from 'prop-types';

class MapComponent extends React.Component {
    render() {

        var floorMap;
        var level = this.props.level;
        console.log(level);
        switch (level) {
            case 1:
            case 2:
                console.log(level);
                floorMap = (
                    <div className='mapFloor mapUpperFloor'>
                        <div className='mapFloorRow'>
                            <div className='mapBridge'></div>
                            <div className='mapLab'></div>
                            <div className='mapSmallLab'></div>
                            <div className='mapLab'></div>
                            <div className='mapBridge'></div>
                        </div>
                        <div className='mapFloorRow'>
                            <div className='mapSpacer'></div>
                            <div className='mapSpacer'></div>
                        </div>

                        <div className='mapFloorRow'>
                            <div className='mapTuteBlock'>
                                <div className='mapTuteRoom'></div>
                                <div className='mapTuteRoom'></div>
                            </div>

                            <div className='mapBridge'></div>
                            <div className='mapSpacer'></div>
                            <div className='mapBridge'></div>
                            <div className='mapSpacer'></div>

                            <div className='mapTuteBlock'>
                                <div className='mapTuteRoom'></div>
                                <div className='mapTuteRoom'></div>
                            </div>
                        </div>
                    </div>
                );
                break;
            case "g":
                floorMap = (<div className='floor'></div>);
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