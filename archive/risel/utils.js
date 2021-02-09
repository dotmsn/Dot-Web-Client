export function getQueries(url) {
    const queriesLayer = url.split('?')[1];
    const queries = {};

    if (queriesLayer) {
        const subLayers = queriesLayer.split('&');
        for (const subLayer of subLayers) {
            const queryKey = subLayer.split('=')[0];
            const queryValue = subLayer.split('=')[1];
            queries[queryKey] = queryValue;
        }
    }

    return queries;
}

export function getParams(pattern, url) {
    const patternLayers = pattern.split('/');
    const urlLayers = url.split('/');
    const params = {};

    for (let i = 0; i < patternLayers.length; i++) {
        const patternLayer = patternLayers[i];
        if (patternLayer.startsWith(':')) {
            params[patternLayer.split(':')[1]] = urlLayers[i];
        }
    }

    return params;
}

export function isMatchUrl(pattern, url) {
    if (pattern === '*') return true;

    const patternLayers = pattern.split('/');
    const urlLayers = url.split('/');

    if (patternLayers.length !== urlLayers.length) {
        return false;
    }

    for (let i = 0; i < patternLayers.length; i++) {
        const patternLayer = patternLayers[i];
        if (!patternLayer.startsWith(':') && patternLayer !== '*') {
            if (patternLayer !== urlLayers[i]) {
                return false;
            }
        } else if (patternLayer.startsWith(':') && urlLayers[i] === '') {
            return false;
        }
    }

    return true;
}
