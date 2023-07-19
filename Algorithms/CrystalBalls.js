const crystalBallSearch = (breacks) =>{
debugger
    const jumpAmount = Math.floor(Math.sqrt(breacks.length));

    let i = jumpAmount;

    for(; i < breacks.length; i += jumpAmount){
        if(breacks[i]){
            break;
        }
    }

    i -= jumpAmount;

    for(let j = 0; j < jumpAmount && i < breacks.length; ++j, ++i){
        if(breacks[i]){
            return i;
        }
    }
    return -1;
}

let array = [false, false, true, true, true, true, true, true, true];

crystalBallSearch(array);

