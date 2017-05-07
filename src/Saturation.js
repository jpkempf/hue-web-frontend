import React, { Component } from 'react';
import { debounce } from 'lodash';

import { SAT_MIN, SAT_MAX } from './config';
import ENDPOINTS from './endpoints';

import Slider from './Slider';

class Saturation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSaturation: 0
        }

        this.updateSaturation = debounce(this.updateSaturation, 300);
    }

    componentDidMount() {
        this.setState({
            currentSaturation: this.props.data.action.sat
        });
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        }, this.updateSaturation(this.props.id, this.state.currentSaturation));
    }

    updateSaturation(groupId, saturationValue) {
        let { endpoint, method, body } = ENDPOINTS.UPDATE_GROUP_SATURATION;
        endpoint = endpoint.replace('{id}', groupId);
        body = body.replace('{value}', saturationValue);

        fetch(endpoint, { method, body });
    }

    render() {
        const props = {
            label: 'SAT',
            name: 'currentSaturation',
            min: SAT_MIN,
            max: SAT_MAX,
            onChange: this.onChange.bind(this),
            value: this.state.currentSaturation,
        }
        return <Slider {...props} />
    }
}

export default Saturation;
