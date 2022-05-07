

    let hidden =document.getElementById("hidden-content");
    let down = document.querySelector("#down-notifications");
    let recentDiv = document.querySelector("#recent-notifications");
    let favouritesDiv = document.querySelector("#favourite-notifications");




    function notifications(){

        down.style.display="grid"
        favouritesDiv.style.display="none"
        recentDiv.style.display="none"
    }

    function recent(){
        recentDiv.style.display="flex"
        down.style.display="none"
        favouritesDiv.style.display="none"
    }
    function favourites(){
        favouritesDiv.style.display="grid"
        down.style.display="none"
        recentDiv.style.display="none"
        
    }


    let data = JSON.parse(localStorage.getItem("loggedUser"))
    let loggedUser = document.getElementById("loggedUser").innerText=data.name
