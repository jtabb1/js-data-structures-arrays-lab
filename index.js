// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift(name);
}

function appendDriver(name) {
    let retArr = [...drivers];
    retArr.push(name);
    return retArr;
}

function prependDriver(name) {
    let retArr = [...drivers];
    retArr.unshift(name);
    return retArr;
}

function removeLastDriver() {
    const n = drivers.length;
    return drivers.slice(0,n-1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}
