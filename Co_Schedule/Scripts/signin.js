

function loginfun(){
        event.preventDefault();
        let arr = JSON.parse(localStorage.getItem("UserData"));
        let email = document.querySelector("#login-email").value;
        let password = document.querySelector("#login-password").value;
        var count=0;
        for(var i = 0; i <arr.length; i++) {

if(email===arr[i].email)
{
    count++;
    if(password===arr[i].password){
        count++
         alert("login successful");
         localStorage.setItem("loggedUser",JSON.stringify(arr[i]))
         window.location.href="index.html"
         return
    }
  }
}
if(!count)alert("please create an account")
else if(count===1)alert("wrong password");
}




        


        

