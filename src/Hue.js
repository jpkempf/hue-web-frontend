import React from 'react';
import { HUE_MIN, HUE_MAX } from './config';

const Hue = (props) => {
    const {
        data: { action: { hue: currentHue } }
    } = props;

    return (
        <label>
            <span>HUE</span>
            <input
                type="range"
                min={HUE_MIN}
                max={HUE_MAX}
                defaultValue={currentHue}
            />
        </label>
    )
}

export default Hue;
