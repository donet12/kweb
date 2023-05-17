const isValidNumber = n =>{
    const pNumber=parseInt(n);
    if(!isFinite(pNumber)|| isNaN(pNumber))
        return false;
    if(pNumber !=n ) return false;
    return pNumber>=1 && pNumber<=9;
}