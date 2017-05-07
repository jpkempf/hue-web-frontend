import ENDPOINTS from './endpoints';

const ACTIONS = {
    async GET_ALL_GROUPS () {
        const { endpoint } = ENDPOINTS.GET_ALL_GROUPS;
        const response = await fetch(endpoint);
        const json = await response.json();
        const groups = [];

        for (let groupId in json) {
            groups.push({
                id: groupId,
                data: json[groupId],
            })
        }
        
        return groups;
    },

    TOGGLE_GROUP (groups, groupId) {
        const group = groups.find(_group => _group.id === groupId);
        const currentState = group.data.state.all_on;
        const newState = (!currentState).toString();
        
        let { endpoint, method, body } = ENDPOINTS.TOGGLE_GROUP;
        endpoint = endpoint.replace('{id}', group.id);
        body = body.replace('{state}', newState);
        
        fetch(endpoint, { method, body });
    },

    UPDATE_GROUP_HUE (groupId, hueValue) {
        let { endpoint, method, body } = ENDPOINTS.UPDATE_GROUP_HUE;
        endpoint = endpoint.replace('{id}', groupId);
        body = body.replace('{value}', hueValue);

        fetch(endpoint, { method, body });
    },
};

export default ACTIONS;
