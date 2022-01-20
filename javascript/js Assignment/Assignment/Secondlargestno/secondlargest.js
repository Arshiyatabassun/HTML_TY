var a =[1,2,6,8,4];
function bs(){
    for(var i =0;i<a.length;i++){
        for(var j =0;j <a.length-i-1 ;j++){
            if(a[j]>a[j+1]){
                var temp =a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }

    }
    console.log(a);
    console.log(a[a.length - 2]);
}
bs();