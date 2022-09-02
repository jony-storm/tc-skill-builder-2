function pipeline(...funcs) {
    return (arg) => {
        return funcs.reduce((y, f) => f(y), arg);
    }
}
const func = pipeline(x => x + 1, x => x * 2, x => -x / 4);
console.log(func(3));// should print -2