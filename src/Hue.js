import React, { Component } from 'react';
import { debounce } from 'lodash';

import { HUE_MIN, HUE_MAX } from './config';
import ACTIONS from './actions';

import Slider from './Slider';

class Hue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentHue: 0
        }

        this.updateGroupHue = debounce(ACTIONS.UPDATE_GROUP_HUE, 300);
    }

    componentDidMount() {
        this.setState({
            currentHue: this.props.data.action.hue
        });
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        }, this.updateGroupHue(this.props.id, this.state.currentHue));
    }

    render() {
        const props = {
            label: 'HUE',
            name: 'currentHue',
            min: HUE_MIN,
            max: HUE_MAX,
            onChange: this.onChange.bind(this),
            value: this.state.currentHue,
        }
        return <Slider {...props} />
    }
}

export default Hue;
