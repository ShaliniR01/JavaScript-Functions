function myForEach(numbers,traverseArray){
    const result = [];
    for(let i=0;i<numbers.length;i++){
        result.push(traverseArray(numbers[i]));
    }
    return result;
}

export default myForEach;