

let data = []

let siginUp = document.getElementById("signup-btn").addEventListener("click", () => {


    let name = document.getElementById("signup-name").value
    let email = document.getElementById("signup-email").value
    let company = document.getElementById("signup-company").value
    let website = document.getElementById("signup-website").value
    let password = document.getElementById("signup-password").value

        let obj = {
            name : name,
            email : email,
            company : company,
            website : website,
            password : password
        }
        data.push(obj)
        localStorage.setItem("UserData",JSON.stringify(data))
        alert("Signup successful")
        window.location.href="index.html"
})


