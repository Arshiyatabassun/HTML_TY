//GeoLocation
//3 methods clearWatch(),getCurrentposition(),watchPosition()

let callback =(position) =>{
    console.log(position);
};
let errorcode =(error) =>{
    console.log(error);
}
navigator.geolocation.getCurrentPosition(callback,errorcode)