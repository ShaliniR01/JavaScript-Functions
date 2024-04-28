function myFilter(numbers,isEven){
    const filteredNumbers = [];
    for(let i=0;i<numbers.length;i++){
        if(isEven(numbers[i]))
            filteredNumbers.push(numbers[i]);
    }
    return filteredNumbers;
}

export default myFilter;