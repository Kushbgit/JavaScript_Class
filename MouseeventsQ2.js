

function fun() {
   let num1 = document.getElementById('num1').value;
   let num2 = document.getElementById('num2').value;
    if(num1==""){
        alert("Please enter the vlaue");
        document.getElementById('num1').focus();
        return false;
    }
    else if(num2==""){
        alert("Please enter the vlaue");
        document.getElementById('num2').focus();
        return false;
    }
    else{
        var a = parseInt(num1);
        var b = parseInt(num2);
        alert(a+b)
    }
    
        
}
