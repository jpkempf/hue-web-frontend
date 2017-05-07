import React, { Component } from 'react';
import { debounce } from 'lodash';

import { BRI_MIN, BRI_MAX } from './config';
import ENDPOINTS from './endpoints';

import Slider from './Slider';

class Brightness extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBrightness: 0
        }

        this.updateBrightness = debounce(this.updateBrightness, 300);
    }

    componentDidMount() {
        this.setState({
            currentBrightness: this.props.data.action.bri
        });
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        }, this.updateBrightness(this.props.id, this.state.currentBrightness));
    }

    updateBrightness(groupId, brightnessValue) {
        let { endpoint, method, body } = ENDPOINTS.UPDATE_GROUP_BRIGHTNESS;
        endpoint = endpoint.replace('{id}', groupId);
        body = body.replace('{value}', brightnessValue);

        fetch(endpoint, { method, body });
    }

    render() {
        const props = {
            label: 'BRI',
            name: 'currentBrightness',
            min: BRI_MIN,
            max: BRI_MAX,
            onChange: this.onChange.bind(this),
            value: this.state.currentBrightness,
        }
        return <Slider {...props} />
    }
}

export default Brightness;
