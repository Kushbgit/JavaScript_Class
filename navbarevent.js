var list = document.getElementById('list');
var bar = document.getElementById('bars');
var clos = document.getElementById('close');

function show(){
    list.style.display="block";
    bar.style.display="none";
    clos.style.display="block";
}
function clo(){
    list.style.display="none";
    bar.style.display="block";
    clos.style.display="none";
}