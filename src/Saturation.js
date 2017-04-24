import React from 'react';
import { SAT_MIN, SAT_MAX } from './config';

const Saturation = (props) => {
    const {
        data: { action: { sat: currentSaturation } }
    } = props;

    return (
        <label>
            <span>SAT</span>
            <input
                type="range"
                min={SAT_MIN}
                max={SAT_MAX}
                defaultValue={currentSaturation}
            />
        </label>
    )
}

export default Saturation;
