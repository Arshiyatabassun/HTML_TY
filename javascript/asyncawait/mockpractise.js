let a =[1,2,3,5,4,2,1,2,2]
let b = a.filter((p,q) =>{
    //  return(a.indexOf(p)!=q);
    return (a.indexOf(p) === q);
    
    

   
})
console.log(b);
