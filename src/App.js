import React, { Component } from 'react';
import ACTIONS from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areLivingRoomLightsOn: false
    }
  }

  componentDidMount() {
    this.getLivingRoomState();
    this.getAllGroups();
  }

  getAllGroups() {
    const { endpoint } = ACTIONS.GET_ALL_GROUPS;

    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        const groups = [];

        for (let groupId in json) {
          groups.push({
            id: groupId,
            data: json[groupId]
          })
        }

        this.setState({ groups: groups });
      })
  }

  getLivingRoomState() {
    const { endpoint } = ACTIONS.GET_LIVING_ROOM_STATUS;

    fetch(endpoint).then(r => r.json()).then(j => {
      this.setState({
        areLivingRoomLightsOn: j.state.all_on
      })
    })
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
      this.toggleState('areLivingRoomLightsOn');
      return;
    }

    console.warn('unexpected response status:', response.status);
  }

  toggleState(key) {
    this.setState({
        [key]: !this.state[key]
      });
  }

  render() {
    const { groups } = this.state;

    return (
      <div>
        <button onClick={this.toggleLivingRoomLights.bind(this)}>
          Toggle Living Room Lights
        </button>
        { groups
          ? <ul>
              { groups.map(group => <li>
                  { group.data.name } with id { group.id } is currently { group.data.state.all_on ? 'ON' : 'OFF' }
                </li>
              )}
            </ul>
          : ''
        }
      </div>
    );
  }
}

export default App;
