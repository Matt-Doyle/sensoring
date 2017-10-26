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
                    <div className='mapFloor'>
                        <div className='mapFloorthird'>
                        <div className='mapRoom'> <h2> {level}B1 </h2></div>
                        <div className='mapRoom mapLab'> <h2> {level}L1 &amp; 2 </h2> </div>
                        <div className='mapRoom'> <h2> {level}L3 </h2></div>
                        <div className='mapRoom mapLab'><h2> {level}L4 &amp; 5 </h2> </div>
                        <div className='mapRoom'> <h2> {level}B4 </h2> </div>
                        </div>
                        <div className='mapFloorthird mapSmallthird'>
                        <div className='mapRoom'> </div>
                        <div className='mapVoid'> </div>
                        <div className='mapRoom mapTinyroom'> </div>
                        <div className='mapVoid'> </div>
                        <div className='mapRoom'> </div>
                        </div>
                        <div className='mapFloorthird'>
                        <div className='mapRoomthird'>
                            <div className='mapRoom mapTut'> <h4> {level}T1 </h4> </div>
                            <div className='mapRoom mapTut'> <h4> {level}T2 </h4> </div>
                        </div>
                        <div className='mapRoom'> </div>
                        <div className='mapRoom centerbridge'> </div>
                        <div className='mapRoom'> </div>
                        <div className='mapRoomthird'>
                            <div className='mapRoom mapTut'> <h4> {level}T3 </h4>  </div>
                            <div className='mapRoom mapTut'> <h4> {level}T4 </h4>  </div>
                        </div>
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