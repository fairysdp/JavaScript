const promise = new Promise((resolve, reject) => {
    resolve(222)
})

const promise1 = promise.then(res => {
    return new Promise((resolve, reject) => {
        resolve(res)
    })
})

promise1.then(res => {
    console.log(res)
})