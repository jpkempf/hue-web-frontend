import React from 'react';
import ToggleGroup from './ToggleGroup';
import Brightness from './Brightness';
import Saturation from './Saturation';
import Hue from './Hue';

const Group = (props) => {
    return (
        <div className="group">
            <strong>{ props.data.name }</strong>
            <ToggleGroup {...props} />
            <Brightness {...props} />
            <Saturation {...props} />
            <Hue {...props} />
        </div>
    )
}

export default Group;
