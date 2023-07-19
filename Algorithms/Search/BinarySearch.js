const search = (haystack, needle) =>{
    let low = 0;
    let high = 0;
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