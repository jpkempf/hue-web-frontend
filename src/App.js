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
        (async () => {
            const groups = await ACTIONS.GET_ALL_GROUPS();
            this.setState({ groups });
        })();
    }

    toggle
    
    render() {
        const { groups } = this.state;
        
        return (
            <div className="wrapper">
                { groups ? groups.map(group => <Group
                    key={group.id}
                    toggleGroup={() => ACTIONS.TOGGLE_GROUP(this.state.groups, group.id)}
                    {...group}
                />) : '' }
            </div>
        );
    }
}
    
export default App;