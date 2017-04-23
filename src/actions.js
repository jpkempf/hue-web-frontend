import { BRIDGE_IP, API_KEY } from './config';

const ACTIONS = {
    SWITCH_ON_LIVING_ROOM_LIGHTS: {
        endpoint: `http://${BRIDGE_IP}/api/${API_KEY}/groups/6/action`,
        method: 'PUT',
        body: '{ "on": true }',
    },
    SWITCH_OFF_LIVING_ROOM_LIGHTS: {
        endpoint: `http://${BRIDGE_IP}/api/${API_KEY}/groups/6/action`,
        method: 'PUT',
        body: '{ "on": false }',
    },
};

export default ACTIONS;