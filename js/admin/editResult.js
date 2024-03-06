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

    fetch("https://safrji.com/api/v1/admins/get-result-id", {
        method: 'POST',
        body: JSON.stringify({
            id : localStorage.getItem("result_id")
        }),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },        
})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data["status"] == false){
                location.replace("sign-in.html");
            }else{        
            document.getElementById("degree").value = data["result"]["degree"];
            document.getElementById("full_degree").value = data["result"]["full_degree"];
            }
         });
}


function editResult(){
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/edit-result", {
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
                alert("تم تعديل النتيجة بنجاح");
            }, 100);  
         }   
        });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const formData = new FormData();

      formData.append("id", localStorage.getItem("result_id"));
      formData.append("degree", document.getElementById("degree").value);
      upload(formData);
}
