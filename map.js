function myMap(numbers,squareOfANumber){
    const mappedNumbers = [];
    for(let i=0;i<numbers.length;i++){
        mappedNumbers.push(squareOfANumber(numbers[i]));
    }
    return mappedNumbers;
}

export default myMap;