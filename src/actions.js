import { BRIDGE_IP, API_KEY } from './config';

const baseUrl = `http://${BRIDGE_IP}/api/${API_KEY}`;

const ACTIONS = {
    GET_ALL_GROUPS: {
        endpoint: `${baseUrl}/groups`
    },
    TOGGLE_GROUP: {
        endpoint: `${baseUrl}/groups/{id}/action`,
        method: 'PUT',
        body: '{ "on": {state} }'
    }
};

export default ACTIONS;