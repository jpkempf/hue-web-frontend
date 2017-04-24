import React, { Component } from 'react';
import { SAT_MIN, SAT_MAX, SAT_STEPS } from './config';
import ACTIONS from './actions';

class Saturation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSaturation: 0
        }
    }

    componentDidMount() {
        this.setState({
            currentSaturation: this.props.data.action.sat
        });
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.updateHue(this.props.id, this.state.currentSaturation);
    }

    updateHue(groupId, saturationValue) {
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
                    step={SAT_STEPS}
                    name="currentSaturation"
                    value={this.state.currentSaturation}
                    onChange={event => this.onChange(event)}
                />
            </label>
        )
    }
}

export default Saturation;
