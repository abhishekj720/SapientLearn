
console.log(process.env.ENV_MODE);
process.nextTick(()=> {
    process.nextTick(()=> {
        console.log('nooooooooooooo ');
    });
    console.log('nextTick ');
});
console.log('start');
process.nextTick(()=> {
    console.log('nextTick callback');
});
console.log('scheduled');
console.log(process.platform)
console.log(process.pid)