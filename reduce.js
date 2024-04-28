function myReduce(numbers, sumOfANumber){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum = sumOfANumber(sum, numbers[i]);
    }
    return sum;
}

export default myReduce;