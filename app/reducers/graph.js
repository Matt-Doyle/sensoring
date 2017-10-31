export default function graph(state = {}, action) {
    switch (action.type) {
        case 'GRAPH_DATA_UPDATED':
            return Object.assign({}, state, {
                data: action.data
            });
            break;
        case 'GRAPH_ROOM_UPDATED':
            return Object.assign({}, state, {
                rooms: action.rooms
            });
        break;
        case 'GRAPH_TIMESCALE_UPDATED':
            return Object.assign({}, state, {
                timescale: action.timescale
            });
            break;
        case 'GRAPH_LEVEL_UPDATED':
            return Object.assign({}, state, {
                level: action.level
            });
            break;
        case 'GRAPH_METRICS_UPDATED':
            return Object.assign({}, state, {
                metrics: action.metrics
            });
            break;
        default:
            return state;
        break;
    }
}
