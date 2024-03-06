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

    fetch("https://safrji.com/api/v1/admins/get-student-id", {
        method: 'POST',
        body: JSON.stringify({
            id : localStorage.getItem("student_id")
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
            document.getElementById("fname").value = data["student"]["name"];
            document.getElementById("username").value = data["student"]["username"];
            document.getElementById("attendance").value = data["student"]["attendance"];
            document.getElementById("profile_picture").src = "https://safrji.com/students/storage/app/public/images/" + data["student"]["image"];

            var selectClass = document.getElementById('exampleFormControlSelect1');
            var optionClass;
            for (var i = 0; i < selectClass.options.length; i++) {
                optionClass = selectClass.options[i];
                     if (optionClass.text == data["student"]["year"]) {
                        optionClass.setAttribute('selected', true);
                    // For a single select, the job's done
                }
            }

            }
         });
}


function editStudent(){
    
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/update-student", {
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

      var e = document.getElementById("exampleFormControlSelect1");
      var text = e.options[e.selectedIndex].text;

      
      formData.append("id", localStorage.getItem("student_id"));
      formData.append("image", fileField.files[0]);
      formData.append("name", document.getElementById("fname").value);
      formData.append("year", text);
      formData.append("username", document.getElementById("username").value);
      formData.append("password", document.getElementById("password").value);
      formData.append("attendance", document.getElementById("attendance").value);
      
      upload(formData);
      
}
