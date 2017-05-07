import React from 'react';

const Slider = (props) => {
    const {label, ...inputProps} = props;

    return (
        <label>
            <span>{props.label}</span>
            <input type="range" {...inputProps} />
            <input type="number" disabled value={inputProps.value} />
        </label>
    )
}

// export const HueSlider = (props) => {
//     return <Slider />
// }

export default Slider;