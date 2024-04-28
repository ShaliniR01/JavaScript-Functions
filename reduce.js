function myReduce(numbers, sumOfAnArray){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum = sumOfAnArray(sum, numbers[i]);
    }
    return sum;
}

export default myReduce;