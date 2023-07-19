const search = (haystack, needle) =>{
    debugger
    let low = 0;
    let high = haystack.length;
    do{
        const m = Math.floor(low + (high - low) / 2);
        const value = haystack[m];

        if(value === needle)
        {
            return true;
        }
        else if(value > needle)
        {
            high = m;
        }else 
        {
            low = m + 1;
        }
    }while(low < high);

    return false;
}

let array = [1,6,7,9,11,15,19,23,14,16,2];

search(array.sort(), 16);