const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for(let num in numbers){
        const remainder = targetSum - num;
        return canSum(remainder);
    }
    // return false;
    
}



console.log(canSum(7, [2,3]));
console.log(canSum(7 [5,3,4,7]));