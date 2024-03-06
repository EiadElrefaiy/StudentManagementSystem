window.onload = function () {
    if(localStorage.getItem("login") == 2){
        $("#teachers_menu").addClass("hidden");
        $("#exams_menu").addClass("hidden");
    }
    document.getElementById("admin_name").innerHTML= localStorage.getItem("admin_name");
    var position;
    localStorage.getItem("login") == 1 ? position = 'مدير' : localStorage.getItem("login") == 2 ? position = 'اخصائي' : position = 'مدرس';
    document.getElementById("admin_position").innerHTML= position;
    document.getElementById("admin_img").src= "https://safrji.com/students/storage/app/public/images/"+localStorage.getItem("admin_image");

    fetch("https://safrji.com/api/v1/admins/get-admin-id", {
        method: 'POST',
        body: JSON.stringify({
            id : 1
        }),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },        
})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if(data["status"] == false){
                location.replace("sign-in.html");
            }else{
            document.getElementById("fname").value = data["admin"]["name"];
            document.getElementById("username").value = data["admin"]["username"];
            document.getElementById("profile_picture").src = "https://safrji.com/students/storage/app/public/images/" + data["admin"]["image"];
            }
         });
}


function editAdmin(){
    
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/update-admin", {
            method: "POST",
            headers: {
                "auth-token" : localStorage.getItem("auth-token"),
                "async": true,
                "crossDomain": true,
            },        
            body: formData
          }).then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data["status"] == false){
                location.replace("sign-in.html");
            }else{
            console.log(data);
            setTimeout(function(){       
                alert("Students Updated Successfully");
            }, 100);  
         }   
        });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const formData = new FormData();
      const fileField = document.querySelector('#customFile');
      formData.append("id", 1);
      formData.append("image", fileField.files[0]);
      formData.append("name", document.getElementById("fname").value);
      formData.append("username", document.getElementById("username").value);
      formData.append("password", document.getElementById("password").value);
      
      upload(formData);
      
}
