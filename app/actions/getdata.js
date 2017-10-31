var vsprintf = require("sprintf-js").vsprintf

export function getGraphData(level, metric, room, timeSpan) {
    return (dispatch) => {
        fetch(vsprintf("/api/query?rooms=%s%s&metrics=%s&from=r-%s&to=rnow", [level, room, metric, timeSpan]), {method: "GET"}).then(
            () => {

            }
        )
    }
}