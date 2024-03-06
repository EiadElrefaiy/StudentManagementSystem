
function login(){
    if ($('#radio1').prop('checked')) {
        $('#result').text('True radio button is checked.');
    if(document.getElementById("username").value == "" || document.getElementById("password").value == ""){
        alert("fill login information")
    }else{
        fetch("https://safrji.com/api/v1/admins/login", {
            method: 'POST',
            body: JSON.stringify({
                username : document.getElementById("username").value,
                password : document.getElementById("password").value,
            }),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data["status"] == false){
                    alert("Invalid username or password");
                }else{
                    location.replace("students.html");
                    localStorage.setItem("auth-token" , data["admin"]["api_token"]);
                    localStorage.setItem("login" , 1);
                    localStorage.setItem("admin_name" ,  data["admin"]["name"]);
                    localStorage.setItem("admin_image" ,  data["admin"]["image"]);
                }
             });    
        }
    } 
    if ($('#radio2').prop('checked')) {
        $('#result').text('True radio button is checked.');
    if(document.getElementById("username").value == "" || document.getElementById("password").value == ""){
        alert("fill login information")
    }else{
        fetch("https://safrji.com/api/v1/admins/login", {
            method: 'POST',
            body: JSON.stringify({
                username : document.getElementById("username").value,
                password : document.getElementById("password").value,
            }),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data["status"] == false){
                    alert("Invalid username or password");
                }else{
                    location.replace("students.html");
                    localStorage.setItem("auth-token" , data["admin"]["api_token"]);
                    localStorage.setItem("login" , 2);
                    localStorage.setItem("admin_name" ,  data["admin"]["name"]);
                    localStorage.setItem("admin_image" ,  data["admin"]["image"]);
                }
             });    
        }
    } 
    if ($('#radio3').prop('checked')) {
        $('#result').text('True radio button is checked.');
    if(document.getElementById("username").value == "" || document.getElementById("password").value == ""){
        alert("fill login information")
    }else{
        fetch("https://safrji.com/api/v1/admins/login-teacher", {
            method: 'POST',
            body: JSON.stringify({
                username : document.getElementById("username").value,
                password : document.getElementById("password").value,
            }),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if(data["status"] == false){
                    alert("Invalid username or password");
                }else{
                    location.replace("students.html");
                    localStorage.setItem("auth-token" , data["admin"]["api_token"]);
                    localStorage.setItem("login" , 3);
                    localStorage.setItem("admin_name" ,  data["admin"]["name"]);
                    localStorage.setItem("admin_image" ,  data["admin"]["image"]);
                }
             });    
        }
    } 
}