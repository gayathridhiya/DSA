const promise1 = new Promise( (resolve, reject) => { setTimeout( () =>  resolve("p1"), 300)})

const promise2 = new Promise( (resolve, reject) => { setTimeout( () =>  resolve("p2"), 200)})

const promise3 = new Promise( (resolve, reject) => { setTimeout( () =>  resolve("p3"), 500)})


const promise1_1 = new Promise( (resolve, reject) => { setTimeout( () =>  reject("p1"), 300)})

const promise2_2 = new Promise( (resolve, reject) => { setTimeout( () =>  reject("p2"), 200)})

const promise3_3 = new Promise( (resolve, reject) => { setTimeout( () =>  reject("p3"), 500)})


//all


// Promise.all([promise1, promise2, promise3])
// .then( res => {console.log(res)})

Promise.any([ promise1, promise2, promise3])
.then( res => {console.log(res)})
.catch(err => {console.log(err)})

Promise.any([ promise1_1, promise2_2, promise3_3])
.then( res => {console.log(res)})
.catch(err => {console.log(err)})

// .all .allSettled .any .race
