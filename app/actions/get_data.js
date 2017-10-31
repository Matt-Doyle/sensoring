var vsprintf = require("sprintf-js").vsprintf;

export function getGraphData(level, rooms, metrics, from) {
    return (dispatch) => {
        var queryString = "/api/query?rooms=%s%s&metrics=" + metrics.join(",") + "&from=%s&to=rnow";
        
        queryString = vsprintf(queryString, [level, rooms, from]);

        console.log(queryString);

        return fetch(queryString,
        {
            method: 'get',
            mode: 'cors',
            cache: 'default'
        }).then((response)=>{
            console.log(response)
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

export function setGraphLevel(level) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_LEVEL_UPDATED',
            graphLevel: level
        })
    }
}

export function setGraphRooms(rooms) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_TIMESCALE_UPDATED',
            graphRooms: rooms
        })
    }
}

export function setGraphTimescale(timescale) {
    return (dispatch) => {
        dispatch({
            type: 'GRAPH_TIMESCALE_UPDATED',
            graphTimescale: timescale
        })
    }
}