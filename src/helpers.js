export function arrayToObjectById(arr) {
    const obj = {}
    arr.forEach(i => {
        obj[i.id] = {...i}
    });
    return obj;
}