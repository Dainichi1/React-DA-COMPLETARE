function handleTimeout() {
    console.log('Timeout elapsed');
}

const handleTimeout2 = () => {
    console.log('Timeout elapsed again');
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 4000);
setTimeout(() => {
    console.log('Timeout elapsed for the third time');
}, 6000);

function greeter(greeterFn) {
    greeterFn();
}
greeter(() => {
    console.log('Hi');
});