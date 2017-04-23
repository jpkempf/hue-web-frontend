import React, { Component } from 'react';
import ACTIONS from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areLivingRoomLightsOn: false
    }
  }

  toggleLivingRoomLights () {
    const action = this.state.areLivingRoomLightsOn
      ? ACTIONS.SWITCH_OFF_LIVING_ROOM_LIGHTS
      : ACTIONS.SWITCH_ON_LIVING_ROOM_LIGHTS;

    const { endpoint, method, body } = action;

    fetch(endpoint, { method, body })
      .then(this.successHandler.bind(this))
  }

  successHandler(response) {
    if (response.status === 200) {
      this.setState({
        areLivingRoomLightsOn: !this.state.areLivingRoomLightsOn
      });

      return;
    }

    console.warn('unexpected response status:', response.status);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleLivingRoomLights.bind(this)}>
          Toggle Living Room Lights
        </button>
      </div>
    );
  }
}

export default App;
