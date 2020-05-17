function setIntervalLimited(callback, interval, x) {
    for (let i = 1; i <= x; i++) {
        setTimeout(callback, i * interval);
    }
}