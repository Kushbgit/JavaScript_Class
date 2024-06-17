let val = document.getElementById('count');
let v = 0;

function inc(){
    v++;
    val.innerHTML=v;
}
function dec(){
    if(v!=0){
        v--;
    }    
    val.innerHTML=v;
    

}
