import React, { Component } from 'react';
import { SAT_MIN, SAT_MAX } from './config';
import ACTIONS from './actions';

import { debounce } from 'lodash';

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
        this.setState({ [event.target.name]: event.target.value });
        this.updateSaturation(this.props.id, this.state.currentSaturation);
    }

    updateSaturation(groupId, saturationValue) {
        let { endpoint, method, body } = ACTIONS.UPDATE_GROUP_SATURATION;
        endpoint = endpoint.replace('{id}', groupId);
        body = body.replace('{value}', saturationValue);

        fetch(endpoint, { method, body });
    }

    render() {
        return (
            <label>
                <span>SAT</span>
                <input
                    type="range"
                    min={SAT_MIN}
                    max={SAT_MAX}
                    name="currentSaturation"
                    value={this.state.currentSaturation}
                    onChange={event => this.onChange(event)}
                />
            </label>
        )
    }
}

export default Saturation;
