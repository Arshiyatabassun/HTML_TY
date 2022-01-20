var a =[20,5,22,2,55,1,11]
function bs(){
    for(var i =0;i<a.length;i++)
    {
        for(var j =0 ; j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                var temp =a[j];
                a[j] =a[j+1];
            a[j+1]=temp;   
              }
        }
    }
    console.log(a);
}
bs();
