const findCurrPair = (currPairToFind, allCurrencies) =>{
    const findCurrPair = allCurrencies.find(currPair => {
        return currPair[0] === currPairToFind    ;
    })

    let finalConvertCurr = '';

    if(findCurrPair){
        finalConvertCurr = findCurrPair["1"];
    }

    return finalConvertCurr;
};


export default findCurrPair;