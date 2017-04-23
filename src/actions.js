import { BRIDGE_IP, API_KEY } from './config';

const baseUrl = `http://${BRIDGE_IP}/api/${API_KEY}`;

const ACTIONS = {
    GET_ALL_GROUPS: {
        endpoint: `${baseUrl}/groups`
    },
    GET_LIVING_ROOM_STATUS: {
        endpoint: `${baseUrl}/groups/6`
    },
    SWITCH_ON_LIVING_ROOM_LIGHTS: {
        endpoint: `${baseUrl}/groups/6/action`,
        method: 'PUT',
        body: '{ "on": true }',
    },
    SWITCH_OFF_LIVING_ROOM_LIGHTS: {
        endpoint: `${baseUrl}/groups/6/action`,
        method: 'PUT',
        body: '{ "on": false }',
    },
};

export default ACTIONS;