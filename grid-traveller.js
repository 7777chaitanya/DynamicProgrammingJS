const gridTraveller  = (m, n, memo= {}) => {
    //creating keys for the 'memo' dictionary
    const key = m + ',' + n
    const key2 = n + ',' + m

    //checking if keys are in the dictionary
    if (key in memo) return memo[key]
    if (key2 in memo) return memo[key2]

    //returning the values that we calculated for the base values
    if (m===0 || n===0) return 0;
    if (m===1 && n===1) return 1;  
    
    //storing the new keys in the 'memo' dictionary
    memo[key] = gridTraveller(m, n-1, memo) + gridTraveller(m-1, n , memo)
    memo[key2] = gridTraveller(m, n-1, memo) + gridTraveller(m-1, n , memo)

    //returning the value after storing it in the 'memo' dictionary for reuse
    return memo[key]
    
}
console.log(gridTraveller(1,1))
console.log(gridTraveller(1, 0))
console.log(gridTraveller(0, 1))
console.log(gridTraveller(2,3))
console.log(gridTraveller(3,2))
console.log(gridTraveller(18,18))
console.log(gridTraveller(6,6))
