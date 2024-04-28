import React from 'react'

export default function HOC(NormalComponent) {
    const logger = () => {
        console.log("loggers")
    }
    return function innerHOC() {
        return (<NormalComponent name="gayathri" logger={logger}/>) //jsx
    }
}

