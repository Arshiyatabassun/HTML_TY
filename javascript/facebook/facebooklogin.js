
function myfunction(){
    const pass = document.getElementById("password");
    const show=document.getElementById("hide1");
    const hide=document.getElementById("hide2");
if(pass.type == "password"){
    pass.type = "text";
    show.style.display='block';
    hide.style.display='none';
        }
else{
    pass.type = "password";
    show.style.display='none';
    hide.style.display='block';
}


}