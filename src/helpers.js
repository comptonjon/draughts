export function arrayToObjectById(arr) {
    const obj = {}
    arr.forEach(i => {
        obj[i.id] = {...i}
    });
    return obj;
}

export function writeToLocalStorage(key, data) {
    const stringData = JSON.stringify(data);
    localStorage.setItem(key, stringData);
}

export function readFromLocalStorage(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        console.log("LS DATA:", data);
        return data;
    } catch {
        return;
    }
}

export function deleteFromLocalStorage(key) {
    localStorage.removeItem(key);
}

export function getLaunchSessionState(key) {
    const INITIAL_STATE = { user: null, requests: 0, error: null, token: null };
    return readFromLocalStorage(key) || INITIAL_STATE;
}