function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            // reject(new Error('reason'))
        }, ms);
    });
}

// p(1000).then(ms => {
//     console.log(`${ms}ms 후에 실행된다.`)
// });

// (async function main() {
//     const ms = await p(1000);
//     console.log(`${ms}ms 후에 실행된다.`);
// })();


// async function asyncP(){
//     const ms = await p(1000);
//     return "Mark: " + ms;
// }

// (async function main(){
//     try {
//         const name = await asyncP();
//         console.log(name);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('end');
//     }
// })();

// p(1000)
//     .then(() => p(1000))
//     .then(() => p(1000))
//     .then(() => {
//         console.log('3000 ms 이후 실행');
//     });

// (async function main() {
//     await p(1000);
//     await p(1000);
//     await p(1000);
//     console.log('3000 ms 이후 실행');
// })();

// (async function main(){
//     const result = await Promise.all([p(1000), p(2000), p(3000)]);
//     console.log(result);
// })();

(async function main(){
    const result = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(result);
})();
