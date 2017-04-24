import React, { Component } from 'react';
import { BRI_MIN, BRI_MAX, BRI_STEPS } from './config';
import ACTIONS from './actions';

class Brightness extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBrightness: 0
        }
    }

    componentDidMount() {
        this.setState({
            currentBrightness: this.props.data.action.bri
        });
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.updateBrightness(this.props.id, this.state.currentBrightness);
    }

    updateBrightness(groupId, brightnessValue) {
        let { endpoint, method, body } = ACTIONS.UPDATE_GROUP_BRIGHTNESS;
        endpoint = endpoint.replace('{id}', groupId);
        body = body.replace('{value}', brightnessValue);

        fetch(endpoint, { method, body });
    }

    render() {
        return (
            <label>
                <span>BRI</span>
                <input
                    type="range"
                    min={BRI_MIN}
                    max={BRI_MAX}
                    step={BRI_STEPS}
                    name="currentBrightness"
                    value={this.state.currentBrightness}
                    onChange={event => this.onChange(event)}
                />
            </label>
        )
    }
}

export default Brightness;
