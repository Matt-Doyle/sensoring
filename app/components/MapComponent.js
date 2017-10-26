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
                    <div className="mapLayout">
                        <div className="mapUpper">
                            <div>1L1 &amp; 2</div>
                            <div>1B1 &amp; 2</div>
                            <div>1L3</div>
                            <div>1L2 &amp; 4</div>
                            <div>1B8 &amp; 9</div>
                        </div>

                        <div className="mapCenter">
                            <div>Stair Area</div>
                            <div>THE VOID</div>
                            <div>Stair Area</div>
                        </div>

                        <div className="mapLower">
                            <div>1B1 &amp; 2</div>
                            <div>1L1 &amp; 2</div>
                            <div>1L3</div>
                            <div>1L2 &amp; 4</div>
                            <div>1B8 &amp; 9</div>
                        </div>

                    </div>
                );
                break;
            case "g":
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