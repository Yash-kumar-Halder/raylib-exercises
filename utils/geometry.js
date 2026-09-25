function sqr(x) {
    return x * x;
}

function calOffset(outerScale, scale) {
    return (outerScale - scale) / 2;
}

function getDistance(sourceX, sourceY, targetX, targetY) {
    return Math.sqrt(
        (targetX - sourceX) * (targetX - sourceX) +
        (targetY - sourceY) * (targetY - sourceY),
    );
}

function isIntersecting(sourceX, sourceY, targetX, targetY, rad1, rad2) {
    const distance = getDistance(sourceX, sourceY, targetX, targetY);
    const intersecting = sqr(rad1 + rad2) > distance;
    return intersecting;
}

module.exports = {
    calOffset,
    getDistance,
    isIntersecting
}