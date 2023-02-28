let arr = ["a", "b"];

arr.push( () => {
    console.log( this );
})

arr[2]()
