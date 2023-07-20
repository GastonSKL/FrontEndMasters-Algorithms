const bubbleSearch = (array) =>{
    for(let i = 0; i < array.length; ++i)
    {
        for (let j = 0; j < array.length - 1 - i; ++j) 
        {

            if(array[j] > array[j+1]){
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }

        }
    }
    return(array);
}
let example = [78,1,45,35,144,2,47,96,38,74,12,25,96,54,21];
console.log(bubbleSearch(example));
bubbleSearch(example); 