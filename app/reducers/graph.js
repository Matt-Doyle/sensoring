import {getGraphData} from '../actions/get_data';
import ops from 'immutable-ops';

const {
    // Functions operating on objects.
    merge,
    mergeDeep,
    omit,
    setIn,

    // Functions operating on arrays.
    insert,
    splice,
    push,
    filter,

    // Functions operating on both
    set,

    // Placeholder for currying.
    __,
} = ops;

export default function graph(state = {}, action) {
    switch (action.type) {
        case 'GRAPH_DATA_UPDATED':
            return ops.setIn(['data'], action.data, state);
        case 'GRAPH_ROOM_UPDATED':
            return ops.setIn(['rooms'], action.rooms, state);
        case 'GRAPH_TIMESCALE_UPDATED':
            return ops.setIn(['timescale'], action.timescale, state);
        case 'GRAPH_LEVEL_UPDATED':
            return ops.setIn(['level'], action.level, state);
        case 'GRAPH_METRICS_UPDATED':
            return ops.setIn(['metrics'], action.metrics, state);
        default:
            return state;
        break;
    }
}
