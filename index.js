function chunkArray(arr,size){
    let newchunkArray = [];
    for(let i=0;i<arr.length;i+=size){
        let mychunk = arr.slice(i,i+size)
        newchunkArray.push(mychunk)
    }
    return newchunkArray
}



module.exports = chunkArray