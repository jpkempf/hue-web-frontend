import React from 'react';
import ToggleGroup from './ToggleGroup';
import Brightness from './Brightness';
import Saturation from './Saturation';
import Hue from './Hue';

const style = {
    display: "inline-block",
    margin: ".5em",
    padding: "1em",
    border: "1px solid grey",
}

const Group = (props) => {
    return (
        <div style={style}>
            <strong>{ props.data.name }</strong>
            <ToggleGroup {...props} />
            <Brightness {...props} />
            <Saturation {...props} />
            <Hue {...props} />
        </div>
    )
}

export default Group;
