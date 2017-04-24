import React, { Component } from 'react';
import { HUE_MIN, HUE_MAX, HUE_STEPS } from './config';
import ACTIONS from './actions';

class Hue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentHue: 0
        }
    }

    componentDidMount() {
        this.setState({
            currentHue: this.props.data.action.hue
        });
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.updateHue(this.props.id, this.state.currentHue);
    }

    updateHue(groupId, hueValue) {
        let { endpoint, method, body } = ACTIONS.UPDATE_GROUP_HUE;
        endpoint = endpoint.replace('{id}', groupId);
        body = body.replace('{value}', hueValue);

        fetch(endpoint, { method, body });
    }

    render() {
        return (
            <label>
                <span>HUE</span>
                <input
                    type="range"
                    min={HUE_MIN}
                    max={HUE_MAX}
                    step={HUE_STEPS}
                    name="currentHue"
                    value={this.state.currentHue}
                    onChange={event => this.onChange(event)}
                />
            </label>
        )
    }
}

export default Hue;
