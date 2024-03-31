function createArray(start,finish){//function to generate an array
    if(start <= finish){
        for(let i = start;i<=finish;i++)
        result.push(i)
    }
    else{
        for(let i=start;i>=finish;i--)
        result.push(i)
    }
    const result=[]
    return result
}

//Usage
const array=createArray(4,7)
console.log(array);//output
const newArray=createArray(-4,7)
console.log(newArray);//output