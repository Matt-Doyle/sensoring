import React from 'react';
import PropTypes from 'prop-types';

class MapComponent extends React.Component {
    render() {
        var floorMap;
        var level = this.props.level;
        switch (level) {
            case 1:
            case 2:
                floorMap = (
                    <div className="mapLayout">
                        <div className="mapUpper">
                            <div>{level}L1 &amp; 2</div>
                            <div>{level}B1 &amp; 2</div>
                            <div>{level}L3</div>
                            <div>{level}L2 &amp; 4</div>
                            <div>{level}B8 &amp; 9</div>
                        </div>

                        <div className="mapCenter">
                            <div>Stair Area</div>
                            <div className="mapEmptyArea">THE VOID</div>
                            <div>Stair Area</div>
                        </div>

                        <div className="mapLower">
                            <div>{level}B1 &amp; 2</div>
                            <div>{level}L1 &amp; 2</div>
                            <div>{level}L3</div>
                            <div>{level}L2 &amp; 4</div>
                            <div>{level}B8 &amp; 9</div>
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