

  let calendar = document.getElementById("app-calendar")


  for(var day = 1; day<=31 ;day++){

    const date = new Date(Date.UTC(2018,0,day));

  const options = { weekday: "long" };


    let name = ""
    if(day<=7)
    {
         const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
         name = `<div class="name">${dayName}</div> `
      
    }

    let icon = `

              <div id="rightSignIn"> 
                  <div class="icon-align"></div>
                  <button id="plus-btn" class="btn-plus-s">  <i id="fafa-icon" class="fa-solid fa-plus"> </i> </button>
              </div>  
                `
    
    calendar.insertAdjacentHTML("beforeend",
    `
      <div class="total"> ${icon}<br> ${name} ${day} </div>
      `)


   
  }
  
  let plusIcon = document.getElementById('icon-plus')
  let btn = document.querySelector('.btn-plus-s')
  btn.addEventListener("click",()=>{

    plusIcon.style.display="block"
    
  })

    

