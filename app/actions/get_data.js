var vsprintf = require("sprintf-js").vsprintf;

export function getGraphData(level, rooms, metrics, from) {
    return (dispatch) => {
        var queryString = "/api/query?rooms=%s%s&metrics=" + metrics.join(",") + "&from=%s&to=rnow";
        
        queryString = vsprintf(queryString, [level, rooms[0], from]);

        return fetch(queryString,
        {
            method: 'get',
            mode: 'cors',
            cache: 'default'
        }).then((response)=>{
            if (response.ok) {
                return response.json().then((json)=>{
                    dispatch({
                        type: 'GRAPH_DATA_UPDATED',
                        data: json
                    })
                })
            }
        })
    }
};

export function setGraphPosition(graph, level, rooms) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_LEVEL_UPDATED',
            level: level
        })

        dispatch({
            type: 'GRAPH_ROOM_UPDATED',
            rooms: rooms
        })

        dispatch(getGraphData(level, rooms, graph.metrics, graph.timescale));
    }
}

export function setGraphLevel(graph, level) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_LEVEL_UPDATED',
            level: level
        })

        dispatch(getGraphData(level, graph.rooms, graph.metrics, graph.timescale));
    }
}

export function setGraphRooms(graph, rooms) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_ROOM_UPDATED',
            rooms: rooms
        })

        dispatch(getGraphData(graph.level, rooms, graph.metrics, graph.timescale));
    }
}

export function setGraphTimescale(graph, timescale) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_TIMESCALE_UPDATED',
            timescale: timescale
        })

        dispatch(getGraphData(graph.level, graph.rooms, graph.metrics, timescale));
    }
}

export function setGraphMetrics(graph, metrics) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_METRICS_UPDATED',
            metrics: metrics
        })

        dispatch(getGraphData(graph.level, graph.rooms, metrics, graph.timescale));
    }
}