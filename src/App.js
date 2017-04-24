import React, { Component } from 'react';
import ACTIONS from './actions';
import Group from './Group';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: null
    }
  }

  componentDidMount() {
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

  toggleGroup(id) {
    const group = this.state.groups.find(_group => _group.id === id);
    const currentState = group.data.state.all_on;
    const newState = (!currentState).toString();

    let { endpoint, method, body } = ACTIONS.TOGGLE_GROUP;
    endpoint = endpoint.replace('{id}', group.id);
    body = body.replace('{state}', newState);

    fetch(endpoint, { method, body }).then(this.getAllGroups.bind(this));
  }

  render() {
    const { groups } = this.state;

    return (
      <div className="wrapper">
        { groups ? groups.map(group => <Group
          key={group.id}
          toggleGroup={this.toggleGroup.bind(this)}
          {...group}
        />) : '' }
      </div>
    );
  }
}

export default App;
