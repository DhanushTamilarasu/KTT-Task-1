function eval(){
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var txts = document.getElementById("txt").value;
    if((name.length>4)&&(txts.length>15)&&(email.length>15)){
        alert("Your Queries was sent Successfully");
        location.href("index.html");
        return true;
    }
    else{
        alert("Please write the valid details to send your qureies");
        return false;
    }
}