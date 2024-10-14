function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a>b ? a-b: b-a;
}

function mul(a,b) {
    return a * b;
}

// CommonJS method
//module.exports = {add,sub,mul};

// EcmaScript method
export {add, sub, mul};