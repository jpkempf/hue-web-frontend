import { BASE_URL } from './config';

const ACTIONS = {
    GET_ALL_GROUPS: {
        endpoint: `${BASE_URL}/groups`
    },
    TOGGLE_GROUP: {
        endpoint: `${BASE_URL}/groups/{id}/action`,
        method: 'PUT',
        body: '{ "on": {state} }'
    },
    UPDATE_GROUP_BRIGHTNESS: {
        endpoint: `${BASE_URL}/groups/{id}/action`,
        method: 'PUT',
        body: '{ "bri": {value} }',
    }
};

export default ACTIONS;
